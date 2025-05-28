import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import DisplayFormData from './DisplayFormData'

function MainForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    showPassword: false,
    phoneCode: "",
    phoneNumber: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const countries={
    India:["Delhi","Maharashtra","Karnataka","Tamil Nadu","Kerala","Gujarat"]
  };
  const validate = (data = formData, fields = null) => {
    const newErrors = {};
    const fieldsToValidate = fields || Object.keys(data);
    
    if (fieldsToValidate.includes('firstName') && !data.firstName) 
      newErrors.firstName = "First name is required";
      
    if (fieldsToValidate.includes('lastName') && !data.lastName) 
      newErrors.lastName = "Last name is required";
      
    if (fieldsToValidate.includes('username') && !data.username) 
      newErrors.username = "Username is required";
      
    if (fieldsToValidate.includes('email')) {
      if (!data.email) 
        newErrors.email = "Email is required";
      else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email))
        newErrors.email = "Valid email format is required";
    }
    
    if (fieldsToValidate.includes('password')) {
      if (!data.password) 
        newErrors.password = "Password is required";
      else if (data.password.length < 6)
        newErrors.password = "Password must be at least 6 characters";
    }
    
    if (fieldsToValidate.includes('phoneCode') && !data.phoneCode) 
      newErrors.phoneCode = "Country code required";
      
    if (fieldsToValidate.includes('phoneNumber')) {
      if (!data.phoneNumber) 
        newErrors.phoneNumber = "Phone number is required";
      else if (!/^\d{10}$/.test(data.phoneNumber))
        newErrors.phoneNumber = "Valid 10-digit phone number required";
    }
    
    if (fieldsToValidate.includes('country') && !data.country) 
      newErrors.country = "Country is required";
      
    if (fieldsToValidate.includes('city') && !data.city) 
      newErrors.city = "City is required";
      
    if (fieldsToValidate.includes('pan')) {
      if (!data.pan) 
        newErrors.pan = "PAN is required";
      else if (!/^[A-Z0-9]{10}$/.test(data.pan))
        newErrors.pan = "Valid 10-character PAN required (alphanumeric)";
    }
    
    if (fieldsToValidate.includes('aadhar')) {
      if (!data.aadhar) 
        newErrors.aadhar = "Aadhar number is required";
      else if (!/^\d{12}$/.test(data.aadhar))
        newErrors.aadhar = "Valid 12-digit Aadhar number required";
    }
    
    return newErrors;
  };

  // Update form data and mark field as touched
  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue,
    }));
    
    // Mark field as touched
    if (!touched[name]) {
      setTouched(prev => ({
        ...prev,
        [name]: true
      }));
    }
  };
  
  // Validate field on blur
  const handleBlur = (e) => {
    const { name } = e.target;
    const fieldErrors = validate(formData, [name]);
    
    setErrors(prev => ({
      ...prev,
      [name]: fieldErrors[name]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    const formErrors = validate();
    setErrors(formErrors);
    
    if(Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      navigate('/details', { state: { formData } });
    }
  };
  

  const [isFormValid, setIsFormValid] = useState(false);
  
  useEffect(() => {
    const formErrors = validate();
    setIsFormValid(Object.keys(formErrors).length === 0);
  }, [formData]);

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
      {[
        ["firstName", "First Name"],
        ["lastName", "Last Name"],
        ["username", "Username"],
        ["email", "E-mail"],
      ].map(([name, label]) => (
        <div key={name}>
          <label className="block mb-1">{label}:</label>
          <input
            name={name}
            value={formData[name] || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full border p-2 ${touched[name] && errors[name] ? 'border-red-500' : ''}`}
          />
          {touched[name] && errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
        </div>
      ))}

      <div>
        <label className="block mb-1">Password:</label>
        <input
          name="password"
          type={formData.showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full border p-2 ${touched.password && errors.password ? 'border-red-500' : ''}`}
        />
        <label className="block mt-1">
          <input
            type="checkbox"
            name="showPassword"
            checked={formData.showPassword}
            onChange={handleChange}
          />
          <span className="ml-2">Show Password</span>
        </label>
        {touched.password && errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <div>
        <label>Phone No.:</label>
        <div className="flex space-x-2">
          <input
            name="phoneCode"
            placeholder="Code"
            value={formData.phoneCode}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-1/4 border p-2 ${touched.phoneCode && errors.phoneCode ? 'border-red-500' : ''}`}
          />
          <input
            name="phoneNumber"
            placeholder="Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-3/4 border p-2 ${touched.phoneNumber && errors.phoneNumber ? 'border-red-500' : ''}`}
          />
        </div>
        {touched.phoneCode && errors.phoneCode && <p className="text-red-500 text-sm">{errors.phoneCode}</p>}
        {touched.phoneNumber && errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
      </div>

      <div>
        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full border p-2 ${touched.country && errors.country ? 'border-red-500' : ''}`}
        >
          <option value="">Select Country</option>
          {Object.keys(countries).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {touched.country && errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
      </div>

      <div>
        <label>City:</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full border p-2 ${touched.city && errors.city ? 'border-red-500' : ''}`}
          disabled={!formData.country}
        >
          <option value="">Select City</option>
          {(countries[formData.country] || []).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {touched.city && errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </div>

      <div>
        <label>PAN No.:</label>
        <input
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="10-character PAN"
          className={`w-full border p-2 ${touched.pan && errors.pan ? 'border-red-500' : ''}`}
        />
        {touched.pan && errors.pan && <p className="text-red-500 text-sm">{errors.pan}</p>}
      </div>

      <div>
        <label>Aadhar No.:</label>
        <input
          name="aadhar"
          value={formData.aadhar}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="12-digit Aadhar number"
          className={`w-full border p-2 ${touched.aadhar && errors.aadhar ? 'border-red-500' : ''}`}
        />
        {touched.aadhar && errors.aadhar && <p className="text-red-500 text-sm">{errors.aadhar}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2" disabled={!isFormValid}>
        Submit
      </button>
    </form>
    </>
  )
}

// New App component for routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainForm />} />
        <Route path="/details" element={<DisplayFormData />} />
      </Routes>
    </Router>
  );
}

export default App

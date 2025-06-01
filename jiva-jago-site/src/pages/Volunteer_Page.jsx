import React, { useState } from 'react';
import { Navbar, Footer } from '../components';
import CTA_Button from '../components/CTA_Button';

// List of all countries
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", 
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", 
    "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", 
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", 
    "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", 
    "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", 
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", 
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", 
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", 
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", 
    "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", 
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", 
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", 
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", 
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", 
    "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", 
    "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];
  
const Volunteer_Page = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      initiatedName: '',
      email: '',
      nationality: '',
      phoneNumber: '',
      linkedIn: '',
      website: '',
      expertise: '',
      experienceYears: '',
      degree: '',
      certifications: '',
      workExperience: '',
      teachingExperience: '',
      languages: '',
      motivation: '',
      philosophy: '',
      strengths: '',
      technology: '',
      teachingMedium: '',
      availability: '',
      paymentMethod: '',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
    };

return (
    <div>
        {/* Navbar */}
        <Navbar/>
        
        {/* Heading */}
        <div className="container mx-auto py-12 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Become An Instructor</h2>
        <p className="text-center text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            We are looking for passionate and knowledgeable instructors from around the world. Fill out the form below to get started.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto p-8">
            {/* Personal Information Section */}
            <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block font-medium mb-1" htmlFor="fullName">Full Name (as seen on Identity Documents)</label>
                <input 
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="initiatedName">Initated Name (optional)</label>
                <input 
                type="text"
                id="initiatedName"
                name="initiatedName"
                value={formData.initiatedName}
                onChange={handleChange}
                required
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="email">Email</label>
                <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="nationality">Nationality</label>
                <select
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                required
                >
                <option value="">Select your nationality</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
                </select>
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="phoneNumber">Phone Number</label>
                <input 
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="linkedIn">LinkedIn Profile (optional)</label>
                <input 
                type="text"
                id="linkedIn"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="website">Website/Portfolio (optional)</label>
                <input 
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                />
            </div>
            </div>

            {/* Professional Background Section */}
            <h3 className="text-2xl font-semibold mt-8 mb-4">Professional Background</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block font-medium mb-1" htmlFor="expertise">Area of Expertise</label>
                <input 
                type="text"
                id="expertise"
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="experienceYears">Years of Experience</label>
                <input 
                type="number"
                id="experienceYears"
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="degree">Highest Degree Earned</label>
                <input 
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="certifications">Relevant Certifications</label>
                <input 
                type="text"
                id="certifications"
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="workExperience">Work Experience</label>
                <textarea
                id="workExperience"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                rows="3"
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="teachingExperience">Teaching Experience</label>
                <textarea
                id="teachingExperience"
                name="teachingExperience"
                value={formData.teachingExperience}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                rows="3"
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="languages">Languages Spoken</label>
                <input 
                type="text"
                id="languages"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                />
            </div>
            </div>

            {/* Motivational Section */}
            <h3 className="text-2xl font-semibold mt-8 mb-4">Motivational Section</h3>
            <div className="grid grid-cols-1 gap-6">
            <div>
                <label className="block font-medium mb-1" htmlFor="motivation">Why do you want to become an instructor?</label>
                <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                rows="4"
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="philosophy">What is your teaching philosophy?</label>
                <textarea
                id="philosophy"
                name="philosophy"
                value={formData.philosophy}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                rows="4"
                />
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="strengths">Describe your unique strengths.</label>
                <textarea
                id="strengths"
                name="strengths"
                value={formData.strengths}
                onChange={handleChange}
                className="w-full border-gray-300 p-2 bg-transparent border hover:border-orange-500 "
                rows="4"
                />
            </div>
            </div>

            <div className="cursor-pointer mt-8">
                <CTA_Button>Submit</CTA_Button>
            </div>
        </form>
        </div>

        {/* Footer */}
        <Footer/>
    </div>
  );
};

export default Volunteer_Page;
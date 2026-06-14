import React, { useState } from 'react';
import { FiX, FiCheck, FiUser, FiPhone, FiCreditCard, FiCheckCircle, FiDownload } from 'react-icons/fi';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    uid: '',
    role: 'farmer', // farmer, student, citizen, panchayat
    ward: '1'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registeredCard, setRegisteredCard] = useState(null);

  if (!isOpen) return null;

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'नाम अनिवार्य है (Name is required)';
    if (!/^\d{10}$/.test(formData.mobile)) tempErrors.mobile = '10 अंकों का मोबाइल नंबर दर्ज करें (Enter 10-digit mobile)';
    if (!/^\d{12}$/.test(formData.uid)) tempErrors.uid = '12 अंकों का आधार नंबर दर्ज करें (Enter 12-digit Aadhaar)';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error as typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      const regId = 'SY-' + Math.floor(100000 + Math.random() * 900000);
      setRegisteredCard({
        ...formData,
        id: regId,
        date: new Date().toLocaleDateString('hi-IN')
      });
    }, 1200);
  };

  const handleDownload = () => {
    alert(`Downloading Digital ID Card: ${registeredCard.id}`);
  };

  const resetForm = () => {
    setFormData({ name: '', mobile: '', uid: '', role: 'farmer', ward: '1' });
    setRegisteredCard(null);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" 
        onClick={resetForm}
      />

      {/* Modal Box - capped height and responsive width */}
      <div className="relative bg-white w-full max-w-md sm:max-w-lg lg:max-w-[580px] max-h-[85vh] flex flex-col rounded-[24px] overflow-hidden shadow-xl z-10 border border-slate-100/80 transform transition-all duration-300">
        
        {/* Banner strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-gov-saffron-500 via-gov-gold-500 to-gov-green-700 flex-shrink-0" />
        
        {/* Close Button */}
        <button 
          onClick={resetForm}
          className="absolute top-3 right-3 p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-20"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Scrollable Modal Body Container */}
        <div className="p-6 md:p-7 overflow-y-auto flex-1 scroll-smooth">
          
          {!registeredCard ? (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center pb-3 border-b border-slate-100">
                <span className="text-2xl">🌱</span>
                <h3 className="text-lg md:text-[22px] lg:text-[26px] font-extrabold text-gov-blue-dark mt-1 leading-tight">
                  डिजिटल नागरिक पंजीकरण (Digital Citizen Registration)
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  योजनाओं और सेवाओं का लाभ पाने के लिए अपनी डिजिटल पहचान पत्र बनाएं।
                </p>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                  पूरा नाम (Full Name)
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="उदा. रमेश कुमार"
                    className={`h-12 pl-10 pr-4 w-full bg-slate-50 border rounded-xl text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-gov-green-600/40 focus:border-gov-green-700 transition-all ${
                      errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-[10px] text-red-500 font-bold mt-1">{errors.name}</p>}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                  मोबाइल नंबर (Mobile Number)
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="tel"
                    name="mobile"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="98765XXXXX"
                    className={`h-12 pl-10 pr-4 w-full bg-slate-50 border rounded-xl text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-gov-green-600/40 focus:border-gov-green-700 transition-all ${
                      errors.mobile ? 'border-red-400 focus:ring-red-200' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.mobile && <p className="text-[10px] text-red-500 font-bold mt-1">{errors.mobile}</p>}
              </div>

              {/* Aadhaar (12-digit number) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                  आधार कार्ड संख्या (12-Digit Aadhaar Number)
                </label>
                <div className="relative">
                  <FiCreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    name="uid"
                    maxLength={12}
                    value={formData.uid}
                    onChange={handleChange}
                    placeholder="1234 5678 9012"
                    className={`h-12 pl-10 pr-4 w-full bg-slate-50 border rounded-xl text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-gov-green-600/40 focus:border-gov-green-700 transition-all ${
                      errors.uid ? 'border-red-400 focus:ring-red-200' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.uid && <p className="text-[10px] text-red-500 font-bold mt-1">{errors.uid}</p>}
              </div>

              {/* Role & Ward Group - stacked on mobile, row on tablet/desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                    श्रेणी (Category)
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="h-12 w-full px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-gov-green-600/40 focus:border-gov-green-700 transition-all"
                  >
                    <option value="farmer">किसान (Farmer)</option>
                    <option value="student">विद्यार्थी (Student)</option>
                    <option value="citizen">नागरिक (General Citizen)</option>
                    <option value="officer">पंचायत अधिकारी (Panchayat Member)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                    वार्ड नंबर (Ward No.)
                  </label>
                  <select
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    className="h-12 w-full px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-gov-green-600/40 focus:border-gov-green-700 transition-all"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i+1} value={i+1}>वार्ड {i+1}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full bg-gradient-to-r from-gov-green-700 to-gov-green-800 text-white font-bold rounded-xl shadow-md hover:from-gov-green-800 active:scale-95 transition-all text-sm flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    सत्यापित किया जा रहा है...
                  </>
                ) : (
                  <>
                    पंजीकरण करें / Submit Registration
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Digital ID Card Showcase (Success Panel) */
            <div className="space-y-5 text-center animate-fade-in-up">
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gov-green-50 text-gov-green-700 rounded-full border border-gov-green-100 flex items-center justify-center text-lg shadow-inner mb-2">
                  <FiCheck className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-lg md:text-[22px] lg:text-[26px] font-extrabold text-gov-green-800 leading-tight">
                  पंजीकरण सफल! (Registration Complete)
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  आपकी डिजिटल विकास पहचान पत्र (Digital ID Card) तैयार है।
                </p>
              </div>

              {/* Digital Card Preview */}
              <div className="relative mx-auto w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50 text-left">
                
                {/* Gov Card Header */}
                <div className="bg-gradient-to-r from-gov-green-800 to-gov-green-dark p-3.5 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🌱</span>
                    <div>
                      <h4 className="text-[10px] font-extrabold tracking-wide uppercase leading-none">नागरिक पहचान पत्र</h4>
                      <p className="text-[7.5px] font-bold text-gov-saffron-500 uppercase tracking-widest leading-none mt-1">Suryapura Identity Card</p>
                    </div>
                  </div>
                  <FiCheckCircle className="text-gov-green-400 w-5 h-5 fill-white/10" />
                </div>

                {/* Card Body */}
                <div className="p-3.5 bg-white grid grid-cols-3 gap-3">
                  
                  {/* Left avatar/qr placeholder */}
                  <div className="col-span-1 flex flex-col items-center justify-between gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-gov-green-700 to-gov-green-900 text-white flex items-center justify-center font-black text-lg shadow-inner">
                      {registeredCard.name.substring(0, 2).toUpperCase()}
                    </div>
                    {/* QR Code Placeholder */}
                    <div className="w-14 h-14 bg-white border border-slate-200 p-0.5 flex items-center justify-center rounded-lg shadow-sm">
                      <div className="grid grid-cols-4 gap-0.5 w-full h-full opacity-80">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className={`w-full h-full ${i % 3 === 0 || i === 7 || i === 10 ? 'bg-slate-800' : 'bg-transparent'}`} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Details */}
                  <div className="col-span-2 space-y-2 text-[11px] text-slate-700 font-semibold self-center">
                    <div>
                      <p className="text-[8px] text-slate-400 uppercase font-bold leading-none mb-0.5">नागरिक (Citizen Name)</p>
                      <p className="text-slate-800 font-bold truncate leading-tight">{registeredCard.name}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-1.5">
                      <div>
                        <p className="text-[8px] text-slate-400 uppercase font-bold leading-none mb-0.5">आईडी (Citizen ID)</p>
                        <p className="text-gov-green-800 font-bold leading-none">{registeredCard.id}</p>
                      </div>
                      <div>
                        <p className="text-[8px] text-slate-400 uppercase font-bold leading-none mb-0.5">वार्ड (Ward No)</p>
                        <p className="text-slate-800 font-bold leading-none">{registeredCard.ward}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      <div>
                        <p className="text-[8px] text-slate-400 uppercase font-bold leading-none mb-0.5">श्रेणी (Role)</p>
                        <p className="text-gov-saffron-600 font-bold uppercase leading-none">{registeredCard.role}</p>
                      </div>
                      <div>
                        <p className="text-[8px] text-slate-400 uppercase font-bold leading-none mb-0.5">जारी तिथि (Issued)</p>
                        <p className="text-slate-800 font-medium leading-none">{registeredCard.date}</p>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Card footer */}
                <div className="bg-slate-50 py-2 px-3.5 text-[8.5px] font-bold text-slate-500 border-t border-slate-200/50 flex items-center justify-between">
                  <span>Aadhaar Verified: XXXX-XXXX-{registeredCard.uid.slice(-4)}</span>
                  <span className="text-gov-green-700">सत्यापित नागरिक</span>
                </div>

              </div>

              {/* Actions on Card */}
              <div className="flex gap-3 justify-center max-w-sm mx-auto pt-2">
                <button
                  onClick={handleDownload}
                  className="h-12 flex-1 bg-gov-green-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-gov-green-800 transition-colors shadow-md"
                >
                  <FiDownload />
                  कार्ड डाउनलोड / Download
                </button>
                <button
                  onClick={resetForm}
                  className="h-12 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                >
                  बंद करें / Close
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;

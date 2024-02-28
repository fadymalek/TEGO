import React, { useState } from 'react';
// import { Navbar } from '../../components';
import './signUpPage.css';

import { Link } from 'react-router-dom'; // Import Link
import '../../components/navbar/navbar.css';
import logo from '../../assets/Logo4.png';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    commercialRegistrationNumber: '',
    registrationAuthority: '',
    taxCardNumber: '',
    mobile: '',
    landline: '',
    fax: '',
    companyType: '',
    capital: '',
    The_owner_id: '',
    owner_name: '',
    Position_of_owner: Array(3).fill(''),
    Owner_address: '',
    Company_branches_address: '',
    Company_branches_governorate: '',
    Main_activity: '',
    Sub_activity: '',
    userName: '',
    email: '',
    passWord: '',
    passWord_2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    // console.log(formData);
  };
  const [repeatBranchRows, setRepeatBranchRows] = useState(1);
  const [repeatOwnerRows, setRepeatOwnerRows] = useState(1);
  const handleAddBranchRow = () => {
    if (repeatBranchRows < 3) {
      setRepeatBranchRows((prevRepeatRows) => prevRepeatRows + 1);
    }
  };

  const handleAddOwnerRow = () => {
    if (repeatOwnerRows < 3) {
      setRepeatOwnerRows((prevRepeatRows) => prevRepeatRows + 1);
    }
  };
  const [repeatActivityRows, setRepeatActivityRows] = useState(1); // State for repeated activity rows

  const handleAddActivityRow = () => {
    setRepeatActivityRows((prevRepeatRows) => prevRepeatRows + 1);
  };

  return (
    <>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3__navbar-links_container">
            <p><Link to="/">الرئيسية</Link></p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>تسجيل الدخول</p>
          {/* Use Link here */}
          <Link to="/signup"><button type="button">انشاء حساب جديد</button></Link>
        </div>
      </div>
      <div className="suplier-signUp section__padding">
        <form onSubmit={handleSubmit}>
          <div className="gradient__text">
            <h1>بيانات المورد</h1>
          </div>
          <div className="form-group">
            <label htmlFor="companyName">اسم الشركة
              <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="address">العنوان على الخريطة (اللوكيشن)
              <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} />
            </label>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="commercialRegistrationNumber">رقم السجل التجاري
                <input type="text" name="commercialRegistrationNumber" id="commercialRegistrationNumber" value={formData.commercialRegistrationNumber} onChange={handleChange} />
              </label>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="registrationAuthority">جهة استخراج السجل التجاري
                <select name="registrationAuthority" id="registrationAuthority" value={formData.registrationAuthority} onChange={handleChange}>
                  <option value="">اختر الجهة</option>
                  <option value="القاهرة">القاهرة</option>
                  <option value="الإسكندرية">الإسكندرية</option>
                  <option value="الجيزة">الجيزة</option>
                  <option value="القليوبية">القليوبية</option>
                  <option value="الدقهلية">الدقهلية</option>
                  <option value="الشرقية">الشرقية</option>
                  <option value="الغربية">الغربية</option>
                  <option value="الإسماعيلية">الإسماعيلية</option>
                  <option value="البحيرة">البحيرة</option>
                  <option value="كفر الشيخ">كفر الشيخ</option>
                  <option value="دمياط">دمياط</option>
                  <option value="بورسعيد">بورسعيد</option>
                  <option value="السويس">السويس</option>
                  <option value="شمال سيناء">شمال سيناء</option>
                  <option value="جنوب سيناء">جنوب سيناء</option>
                  <option value="الفيوم">الفيوم</option>
                  <option value="بني سويف">بني سويف</option>
                  <option value="المنوفية">المنوفية</option>
                  <option value="أسيوط">أسيوط</option>
                  <option value="الوادي الجديد">الوادي الجديد</option>
                  <option value="سوهاج">سوهاج</option>
                  <option value="قنا">قنا</option>
                  <option value="الأقصر">الأقصر</option>
                  <option value="أسوان">أسوان</option>
                  <option value="البحر الأحمر">البحر الأحمر</option>
                </select>
              </label>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="taxCardNumber">رقم البطاقة الضريبية
                <input type="text" name="taxCardNumber" id="taxCardNumber" value={formData.taxCardNumber} onChange={handleChange} />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="mobile">موبايل
                <input type="text" name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} />
              </label>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="landline">تليفون أرضي
                <input type="text" name="landline" id="landline" value={formData.landline} onChange={handleChange} />
              </label>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="fax">فاكس
                <input type="text" name="fax" id="fax" value={formData.fax} onChange={handleChange} />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="companyType">جهة استخراج السجل التجاري
                <select name="companyType" id="companyType" value={formData.companyType} onChange={handleChange}>
                  <option value="">اختر نوع الشركة</option>
                  <option value="اجنبية">اجنبية</option>
                  <option value="فردية">فردية</option>
                  <option value="توصية بسيطة">توصية بسيطة</option>
                  <option value="تضامن">تضامن</option>
                  <option value="ذات مسئولية محدودة">ذات مسئولية محدودة</option>
                  <option value="مساهمة مصرية">مساهمة مصرية</option>
                  <option value="قطاع أعمال">قطاع أعمال</option>
                  <option value="جمعيات تعاونيه">جمعيات تعاونيه</option>
                  <option value="اخري">اخري</option>
                </select>
              </label>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="capital">رأس مال الشركة من واقع السجل التجاري بالجنيه المصري
                <input type="text" name="capital" id="capital" value={formData.capital} onChange={handleChange} />
              </label>
            </div>
          </div>
          <hr data-v-7e013592 />
          <h2>ملاك الشركة المسئولين بالتضامن/ أعضاء مجلس الإدارة / المندوبين بحد أقصي(3)مندوب</h2>
          <div>
            {[...Array(repeatBranchRows)].map((_, index) => (
              <div key={index} className="row">
                <div className="form-group col-md-6">
                  <label htmlFor={`owner_name_${index}`}>الاسم
                    <input type="text" name={`owner_name_${index}`} id={`owner_name_${index}`} value={formData[`owner_name_${index}`]} onChange={(e) => handleChange(e, index)} />
                  </label>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor={`The_owner_id_${index}`}>الرقم القومي
                    <input type="text" name={`The_owner_id_${index}`} id={`The_owner_id_${index}`} value={formData[`The_owner_id_${index}`]} onChange={(e) => handleChange(e, index)} />
                  </label>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor={`Position_of_owner_${index}`}>المنصب
                    <select name={`Position_of_owner_${index}`} id={`Position_of_owner_${index}`} value={formData[`Position_of_owner_${index}`]} onChange={(e) => handleChange(e, index)}>
                      <option value="">اختر المنصب</option>
                      <option value="مالك">مالك</option>
                      <option value="رئيس مجلس ادارة">رئيس مجلس ادارة</option>
                      <option value="عضو مجلس ادارة">عضو مجلس ادارة</option>
                      <option value="مدير">مدير</option>
                      <option value="شريك">شريك</option>
                      <option value="زوج / زوجة المالك">زوج / زوجة المالك</option>
                      <option value="زوج / زوجة رئيس مجلس الادارة">زوج / زوجة رئيس مجلس الادارة</option>
                      <option value="مندوب">مندوب</option>
                    </select>
                  </label>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor={`Owner_address_${index}`}>العنوان
                    <input type="text" name={`Owner_address_${index}`} id={`Owner_address_${index}`} value={formData[`Owner_address_${index}`]} onChange={(e) => handleChange(e, index)} />
                  </label>
                </div>
              </div>
            ))}
          </div>
          <button data-v-7e013592="" type="button" className="Add_button" onClick={handleAddBranchRow}>
            <i data-v-7e013592="" className="fa fa-plus" />اضافة مالك اخر
          </button>
          <hr data-v-7e013592 />
          <h2>فروع الشركة</h2>
          {[...Array(repeatOwnerRows)].map((_, index) => (
            <div key={index} className="row">
              <div className="form-group col-md-8">
                <label htmlFor={`Company_branches_address_${index}`}>عنوان
                  <input type="text" name={`Company_branches_address_${index}`} id={`Company_branches_address_${index}`} value={formData[`Company_branches_address_${index}`]} onChange={handleChange} />
                </label>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor={`Company_branches_governorate_${index}`}>المحافظة
                  <select name={`Company_branches_governorate_${index}`} id={`Company_branches_governorate_${index}`} value={formData[`Company_branches_governorate_${index}`]} onChange={(e) => handleChange(e, index)}>
                    <option value="">اختر الجهة</option>
                    <option value="القاهرة">القاهرة</option>
                    <option value="الإسكندرية">الإسكندرية</option>
                    <option value="الجيزة">الجيزة</option>
                    <option value="القليوبية">القليوبية</option>
                    <option value="الدقهلية">الدقهلية</option>
                    <option value="الشرقية">الشرقية</option>
                    <option value="الغربية">الغربية</option>
                    <option value="الإسماعيلية">الإسماعيلية</option>
                    <option value="البحيرة">البحيرة</option>
                    <option value="كفر الشيخ">كفر الشيخ</option>
                    <option value="دمياط">دمياط</option>
                    <option value="بورسعيد">بورسعيد</option>
                    <option value="السويس">السويس</option>
                    <option value="شمال سيناء">شمال سيناء</option>
                    <option value="جنوب سيناء">جنوب سيناء</option>
                    <option value="الفيوم">الفيوم</option>
                    <option value="بني سويف">بني سويف</option>
                    <option value="المنوفية">المنوفية</option>
                    <option value="أسيوط">أسيوط</option>
                    <option value="الوادي الجديد">الوادي الجديد</option>
                    <option value="سوهاج">سوهاج</option>
                    <option value="قنا">قنا</option>
                    <option value="الأقصر">الأقصر</option>
                    <option value="أسوان">أسوان</option>
                    <option value="البحر الأحمر">البحر الأحمر</option>
                  </select>
                </label>
              </div>
            </div>
          ))}
          <button type="button" className="Add_button" onClick={handleAddOwnerRow}>
            <i className="fa fa-plus" /> اضافة فرع آخر
          </button>
          <hr data-v-7e013592 />
          <h2>انشطة الشركة</h2>
          {[...Array(repeatActivityRows)].map((_, index) => (
            <div key={index} className="row">
              <div className="form-group col-md-6">
                <label htmlFor={`Main_activity_${index}`}>نشاط رئيسي
                  <input type="text" name={`Main_activity_${index}`} id={`Main_activity_${index}`} value={formData[`Main_activity_${index}`]} onChange={handleChange} />
                </label>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor={`Sub_activity_${index}`}>نشاط فرعي
                  <input type="text" name={`Sub_activity_${index}`} id={`Sub_activity_${index}`} value={formData[`Sub_activity_${index}`]} onChange={handleChange} />
                </label>
              </div>
            </div>
          ))}
          <button type="button" className="Add_button" onClick={handleAddActivityRow}>
            <i className="fa fa-plus" /> اضافة نشاط آخر
          </button>
          <hr data-v-7e013592 />
          <div className="files">
            <p className="file">المرفقات</p>
            <button type="button" className="Add_button_files" onClick={handleChange}>
              <i className="fa fa-plus" /> choose file
            </button>
          </div>
          <p className="red">جميع المرفقات يجب ان تكون فى ملف واحد من نوع PDF بمساحه 10MB كحد اقصى . للتعرف عالى المطلوب فى المرفق من فضلك</p>
          <hr data-v-7e013592 />
          <div className="gradient__text">
            <h1 className="account_h1">بيانات الحساب</h1>
          </div>
          <div className="form-group">
            <label htmlFor="userName">اسم المستخدم
              <input type="text" name="userName" id="userName" value={formData.userName} onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">البريد الالكتروني
              <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="passWord">كلمة المرور
              <input type="text" name="passWord" id="passWord" value={formData.passWord} onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="passWord_2">تاكيد كلمة المرور
              <input type="text" name="passWord_2" id="passWord_2" value={formData.passWord_2} onChange={handleChange} />
            </label>
          </div>
          <button type="submit" className="submit_button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;

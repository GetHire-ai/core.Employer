import React from "react";

const SettingsCareer = () => {
  return (
    <>
      <div className="px-[20px]">
        <p className="text-[24px] font-[500]">Career Page</p>
        <div className="grid lg:grid-cols-2 mt-[20px] gap-[20px]">
          <div className="bg-white p-[9px]">
            <p className="text-[20px] font-[500]">Company Profile</p>
            <div className="flex flex-col gap-[14px] mt-[22px]">
              <div>
                <p className="text-[12px] font-[Poppins] font-[400] pb-[4px]">Company Name *</p>
                <input
                  className="border-[1px] border-[#e8e8e8] rounded-[4px] p-[6px] w-full text-[10px] font-[400] font-[Poppins] text-[#696969] outline-none"
                  type="text"
                  placeholder="Skill genic"
                />
                <p className="text-[9px] font-[Poppins] font-[400]">
                  *Don't include PVT LTD INC,LLP Etc
                </p>
              </div>
              <div className="flex gap-[7px] w-full">
                <div className="w-full">
                  <p className="text-[12px] font-[Poppins] font-[400] pb-[4px]">Website *</p>
                  <input
                    className="border-[1px] border-[#e8e8e8] rounded-[4px] p-[6px] w-full text-[10px] font-[400] font-[Poppins] text-[#696969] outline-none"
                    type="text"
                    placeholder="www.Skill genic.com"
                  />
                </div>
                <div className="w-full">
                  <p className="text-[12px] font-[Poppins] font-[400] pb-[4px]">Career page Title</p>
                  <input
                    className="border-[1px] border-[#e8e8e8] rounded-[4px] p-[6px] w-full text-[10px] font-[400] font-[Poppins] text-[#696969] outline-none"
                    type="text"
                    placeholder="career page"
                  />
                </div>
              </div>
              <div>
                <p className="text-[12px] font-[Poppins] font-[400] pb-[4px]">Location *</p>
                <input
                  className="border-[1px] border-[#e8e8e8] rounded-[4px] p-[6px] w-full text-[10px] font-[400] font-[Poppins] text-[#696969] outline-none"
                  type="text"
                  placeholder="Indore"
                />
              </div>
              <div>
                <p className="text-[12px] font-[Poppins] font-[400] pb-[4px]">Company profile</p>
                <textarea
                  rows="5"
                  placeholder="text here..."
                  className=" w-full outline-none  rounded-[4px] border-[1px] border-[#e8e8e8] p-[6px] text-[#696969] text-[10px] font-[400] font-[Poppins]"
                ></textarea>
              </div>
            </div>
            <p className="text-[20px] mt-[20px] font-[Poppins] font-[500]">Social Profile</p>
            <div className="flex gap-[7px] mt-[20px] w-full">
              <div className="w-full">
                <p className="text-[12px] font-[Poppins] font-[400] pb-[4px]">Facebook profile</p>
                <input
                  className="border-[1px] border-[#e8e8e8] rounded-[4px] p-[6px] w-full text-[10px] font-[400] font-[Poppins] text-[#696969] outline-none"
                  type="text"
                />
              </div>
              <div className="w-full">
                <p className="text-[12px] font-[400] font-[Poppins] pb-[4px]">Linkedin profile</p>
                <input
                  className="border-[1px] border-[#e8e8e8] rounded-[4px] p-[6px] w-full text-[10px] font-[400] font-[Poppins] text-[#696969] outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="flex gap-[7px] mt-[16px] w-full">
              <div className="w-full">
                <p className="text-[12px] font-[400] font-[Poppins] pb-[4px]">Instagram profile</p>
                <input
                  className="border-[1px] border-[#e8e8e8] rounded-[4px] p-[6px] w-full text-[10px] font-[400] font-[Poppins] text-[#696969] outline-none"
                  type="text"
                />
              </div>
              <div className="w-full">
                <p className="text-[12px] font-[400] font-[Poppins] pb-[4px]">Twitter profile</p>
                <input
                  className="border-[1px] border-[#e8e8e8] rounded-[4px] p-[6px] w-full text-[10px] font-[400] font-[Poppins] text-[#696969] outline-none"
                  type="text"
                />
              </div>
            </div>
            <p className="text-[20px] mt-[20px] font-[500]">
              Other links (Optional)
            </p>
            <div className="flex gap-[7px] mt-[20px] w-full">
              <div className="w-full">
                <p className="text-[12px] font-[400] font-[Poppins] pb-[4px]">Terms & Conditions URL</p>
                <input
                  className="border-[1px] border-[#e8e8e8] rounded-[4px] p-[6px] w-full text-[10px] font-[400] font-[Poppins] text-[#696969] outline-none"
                  type="text"
                />
              </div>
              <div className="w-full">
                <p className="text-[12px] font-[400] font-[Poppins] pb-[4px]">Privacy Policy URL</p>
                <input
                  className="border-[1px] border-[#e8e8e8] rounded-[4px] p-[6px] w-full text-[10px] font-[400] font-[Poppins] text-[#696969] outline-none"
                  type="text"
                />
              </div>
            </div>

            <div className="w-[49.3%] mt-[16px]">
              <p className="text-[12px] font-[400] font-[Poppins] pb-[4px]">GDPR URL</p>
              <input
                className="border-[1px] border-[#e8e8e8] rounded-[4px]  p-[6px] w-full text-[10px] font-[400] font-[Poppins] text-[#696969] outline-none"
                type="text"
              />
            </div>
            <div className="flex gap-[3px] mt-[16px]">
              <input type="checkbox" />
              <p className="text-[10px] font-[500]" outline-none>
                Display share job opening widget on careers page
              </p>
            </div>
            <div className="flex gap-[3px]">
              <input type="checkbox" />
              <p className="text-[10px] font-[500]" outline-none>
                Hide Recooty's branding (Available on paid plans)
              </p>
            </div>
            {/* <button className="bg-black mt-[35px] mb-[27px] rounded-[8px] py-[14px] px-[63px] text-white text-[16px] font-[500]">
              Save
            </button> */}
            <button class="btn relative inline-flex items-center justify-start overflow-hidden  transition-all bg-indigo-300  hover:bg-white group  mt-[35px] mb-[27px] rounded-[8px] py-[14px] px-[63px] text-white text-[16px] font-[500]">
                <span class="w-56 h-48 rounded bg-blue-700 absolute bottom-0 left-0 translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">Save</span>
            </button>
          </div>
          <div className="flex flex-col w-[60%] gap-[14px]">
            <div className="bg-white flex flex-col gap-[18px] rounded-[12px] p-[10px]">
              <p className="text-[20px] font-[500]">Career page URL</p>
              <div>
                <p className="text-[10px] font-[400] font-[Poppins]">Default URL:</p>
                <p className="text-[10px] text-[#5956e9] font-[400]">
                  Careerpage.co/skillgenic.in
                </p>
              </div>
              <p className="text-[10px] font-[400] font-[Poppins] pr-[66px]">
                *Custom domain name is only available on MAX plan.If you need
                any help, please contact support
              </p>
            </div>
            <div className="bg-white flex flex-col gap-[18px] rounded-[12px] p-[10px]">
              <p className="text-[20px] font-[500]">Career Logo</p>
              <div className="px-[17px]">
                <input type="file" className="text-[10px] font-[500]" />
                <p className="text-[10px] font-[400] font-[Poppins]" outline-none>
                  Logo must be in JPG PNG ( less than 8 mb )
                </p>
              </div>
              <button className="bg-blue-400 hover:shadow-xl hover:bg-blue-500 duration-300 text-white rounded-[4px] py-[7px] px-[34px] w-[105px] mx-[17px] mb-[45px]">
                Upload
              </button>
            </div>
            <div className="bg-white flex flex-col gap-[18px] rounded-[12px] p-[10px]">
              <p className="text-[20px] font-[500]">Cover Picture</p>
              <div className="px-[17px]">
                <input type="file" className="text-[10px] font-[500]" />
                <p className="text-[10px] font-[400] font-[Poppins]" outline-none>
                  Cover picture must be in jpg or png ( less than 8 mb )
                </p>
              </div>
              <button className="bg-blue-400 hover:shadow-xl hover:bg-blue-500 duration-300 text-white rounded-[4px] py-[7px] px-[34px] w-[105px] mx-[17px] mb-[45px]">
                Upload
              </button>
            </div>
            <div className="bg-white flex flex-col gap-[18px] rounded-[12px] p-[10px]">
              <p className="text-[20px] font-[500]">Linkedin Link</p>
              <div>
                <p className="text-[14px] font-[400] font-[Poppins]">Link </p>
                <input
                  type="text outline-none"
                  placeholder="Nextgen"
                  className="text-[12px] font-[500] border-[1px] border-[#e8e8e8] rounded-[4px] p-[6px] w-full "
                />
              </div>
              <button className="bg-blue-400 hover:shadow-xl hover:bg-blue-500 duration-300 ml-5 text-white rounded-[4px] py-[7px] px-[34px] w-[105px] mb-[45px]">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsCareer;

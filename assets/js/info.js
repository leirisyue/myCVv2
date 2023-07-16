

fetch('assets/i18n/info.json')
   .then(function (response) {
      return response.json();
   })
   .then(function (data) {
      infoData(data);
   })
   .catch(function (err) {
      console.log('error: ' + err);
   });



function infoData(data) {
   console.log("🚀 ~ appendData ~ data:", data);

   document.getElementById("about-myInfo").innerHTML = `
   <li><i class="bi bi-chevron-right"></i> <strong>Ngày sinh: </strong> <span>${data.info.birthday}</span></li>
   <li><i class="bi bi-chevron-right"></i> <strong>SĐT: </strong> <span>${data.info.phone}</span></li>
   <li><i class="bi bi-chevron-right"></i> <strong>Địa chỉ: </strong> <span>${data.info.local}</span></li>
   `;

   document.getElementById("about-myMedia").innerHTML = `
   <li><i class="bi bi-chevron-right"></i> <strong>Email: </strong> <span>${data.media.email}</span></li>
   <li><i class="bi bi-chevron-right"></i> <strong>Trình độ </strong> <span>${data.info.Degree}</span></li>
   <li><i class="bi bi-chevron-right"></i> <strong>Địa chỉ: </strong> <span>${data.info.local}</span></li>
   `;

   document.getElementById('contact-info').innerHTML = `
   <div class="info">
      <div class="address">
         <i class="bi bi-geo-alt"></i>
         <h4>Location</h4>
         <p>${data.info.local}</p>
      </div>
      <div class="email">
         <i class="bi bi-envelope"></i>
         <h4>Email:</h4>
         <p>${data.media.email}</p>
      </div>
      <div class="phone">
         <i class="bi bi-phone"></i>
         <h4>Call:</h4>
         <p>${data.info.phone}</p>
      </div>
   </div>
   `
}



fetch('assets/i18n/resume.json')
   .then(function (response) {
      return response.json();
   })
   .then(function (data) {
      resumeData(data);
   })
   .catch(function (err) {
      console.log('error: ' + err);
   });


function resumeData(data) {
   console.log("🚀 ~ appendData ~ data:", data);

   document.getElementById("high-shool").innerHTML = `
      <div class="resume-item">
         <h4>${data.education.highShool.name}</h4>
         <h5>${data.education.highShool.time}</h5>
         <p><em>${data.education.highShool.subject}</em></p>
         <p>${data.education.highShool.description}</p>
      </div>
   `;
   document.getElementById("university1").innerHTML = `
      <div class="resume-item">
      <h4>${data.education.university1.name}</h4>
      <h5>${data.education.university1.time}</h5>
      <p><em>${data.education.university1.subject}</em></p>
      <p>${data.education.university1.description}</p>
      <ul>
         <li>${data.education.university1.sub1}</li>
         <li>${data.education.university1.sub2}</li>
         <li>${data.education.university1.sub4}</li>
         <li>${data.education.university1.sub5}</li>
         <li>${data.education.university1.sub6}</li>
      </ul>
      </div>
   `;
   document.getElementById("university2").innerHTML = `
      <div class="resume-item">
      <h4>${data.education.university2.name}</h4>
      <h5>${data.education.university2.time}</h5>
      <p><em>${data.education.university2.subject}</em></p>
      <ul>
      <li>${data.education.university2.sub1}</li>
      <li>${data.education.university2.sub2}</li>
      <li>${data.education.university2.sub3}</li>
      <li>${data.education.university2.sub4}</li>
      </ul>
      <p>${data.education.university2.description}</p>
      </div>
   `;
   document.getElementById("university3").innerHTML = `
      <div class="resume-item">
      <h4>${data.education.university3.name}</h4>
      <p>${data.education.university3.description}</p>
      </div>
   `;
   document.getElementById("frondEnd").innerHTML = `
      <div class="resume-item">
      <h4>${data.experience.frondEnd.name}</h4>
      <h5>${data.experience.frondEnd.time}</h5>
      <p><em>${data.experience.frondEnd.subject}</em></p>
      <p>${data.experience.frondEnd.description}</p>
      </div>
   `;
   document.getElementById("backEnd").innerHTML = `
      <div class="resume-item">
      <h4>${data.experience.backEnd.name}</h4>
      <h5>${data.experience.backEnd.time}</h5>
      <p><em>${data.experience.backEnd.subject}</em></p>
      <p>${data.experience.backEnd.description}</p>
      </div>
   `;
   
}

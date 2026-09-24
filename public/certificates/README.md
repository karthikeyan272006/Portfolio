# Certificate Storage Folder

Place all certificate files (PDFs, images, etc.) inside this directory (`public/certificates/`).

### How to add a new certificate in the future:
1. Copy your certificate file (e.g., `aws_cloud_cert.pdf`) into `public/certificates/`.
2. Open `src/data/certifications.js`.
3. Add a new certificate object to `certificationsData`:
   ```js
   {
       id: "cert-4",
       name: "Your Certificate Name",
       provider: "Issuing Organization",
       year: "Month Year",
       type: "Course Certification", // or "Internship Certificate", "Professional Certificate", etc.
       category: "course",
       fileUrl: "/certificates/aws_cloud_cert.pdf",
       skills: ["Skill 1", "Skill 2"],
       description: "Brief description of the certification."
   }
   ```
4. Save the file. The new certificate will automatically appear on the Certifications page with preview and download options!

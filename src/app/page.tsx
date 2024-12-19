import contentful from "@/app/contentful/contentful";
import {
  IContentfulAsset,
  TypeCompanyProfileSkeleton,
  TypeTestimonialSkeleton,
  TypeProjectSkeleton,
  TypeTeamMemberSkeleton,
} from "@/app/contentful/types/comPro.types";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const getCompanyProfileContentful = async () => {
  try {
    const data = await contentful.getEntries<TypeCompanyProfileSkeleton>({
      content_type: "companyProfile",
    });
    return data;
  } catch (err) {
    console.error("Error fetching company profile:", err);
    return null;
  }
};

const getTestimonials = async () => {
  try {
    const data = await contentful.getEntries<TypeTestimonialSkeleton>({
      content_type: "companyProfile",
    });
    return data;
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    return null;
  }
};

const getProjects = async () => {
  try {
    const data = await contentful.getEntries<TypeProjectSkeleton>({
      content_type: "companyProfile",
    });
    return data;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null;
  }
};

const getTeamMembers = async () => {
  try {
    const data = await contentful.getEntries<TypeTeamMemberSkeleton>({
      content_type: "companyProfile",
    });
    return data;
  } catch (err) {
    console.error("Error fetching team members:", err);
    return null;
  }
};

export default async function CompanyProfile() {
  const profile = await getCompanyProfileContentful();
  const testimonials = await getTestimonials();
  const projects = await getProjects();
  const teamMembers = await getTeamMembers();

  const company = profile?.items?.[0]?.fields;

  if (!company) {
    return (
      <div className="page-wrapper">
        <div className="container">
          <h1 className="page-title">Error loading company profile</h1>
          <p>Sorry, we could not load the company profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        <h1 className="page-title">About Us</h1>
        <h4 className="page-subtitle">Tertarik bekerja sama dengan kami?</h4>

        {/* Company Information */}
        <div className="company-card">
          <div className="company-logo">
            {company?.logo && (
              <Image
                src={`https:${
                  (company.logo as IContentfulAsset)?.fields.file.url
                }`}
                alt={company.name || "Company Logo"}
                width={150}
                height={150}
                layout="intrinsic"
              />
            )}
          </div>

          <div className="company-info">
            <h2>{company?.name || "Company Name"}</h2>
            {/* Render Rich Text for Description */}
            <div>
              {company?.description &&
                documentToReactComponents(company.description)}
            </div>
            <p>
              <strong>Contact:</strong>{" "}
              {company?.contact || "No contact information"}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {company?.address || "No address available"}
            </p>
          </div>
        </div>

        {/* Testimonials */}
        {testimonials?.items && testimonials.items.length > 0 && (
          <div className="testimonial">
            <h3>What Our Clients Say</h3>
            {testimonials.items.map((testimonial, idx) => (
              <div className="testimonial-item" key={idx}>
                {testimonial.fields.clientPhoto && (
                  <Image
                    src={`https:${
                      (testimonial.fields.clientPhoto as IContentfulAsset)
                        ?.fields.file.url
                    }`}
                    alt={testimonial.fields.clientName || "Client Photo"}
                    width={60}
                    height={60}
                    layout="intrinsic"
                  />
                )}
                <div>
                  <p>{testimonial.fields.testimonialText}</p>
                  <strong>{testimonial.fields.clientName}</strong>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Team Members */}
        {teamMembers?.items && teamMembers.items.length > 0 && (
          <div className="team-section">
            <h3>Meet Our Team</h3>
            <div className="team-members">
              {teamMembers.items.map((member, idx) => (
                <div className="team-card" key={idx}>
                  {member?.fields?.photo && (
                    <Image
                      src={`https:${
                        (member.fields.photo as IContentfulAsset)?.fields.file
                          .url
                      }`}
                      alt={member?.fields?.name || "Team Member Photo"}
                      width={120}
                      height={120}
                      layout="intrinsic"
                    />
                  )}
                  <h4>{member?.fields?.name || "Team Member Name"}</h4>
                  <p>{member?.fields?.position || "Team Member Position"}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Gallery */}
        {projects?.items && projects.items.length > 0 && (
          <div className="project-gallery">
            <h3>Our Projects</h3>
            <div className="projects">
              {projects.items.map((project, idx) => (
                <div className="project-card" key={idx}>
                  {project?.fields?.projectImage && (
                    <Image
                      src={`https:${
                        (project.fields.projectImage as IContentfulAsset)
                          ?.fields.file.url
                      }`}
                      alt={project?.fields?.projectName || "Project Image"}
                      width={300}
                      height={200}
                      layout="intrinsic"
                    />
                  )}
                  <div className="project-info">
                    <h4>{project?.fields?.projectName || "Project Name"}</h4>
                    <p>
                      {project?.fields?.projectDescription ||
                        "Project Description"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

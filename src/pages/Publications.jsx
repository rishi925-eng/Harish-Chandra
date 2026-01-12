import { ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    { id: 1, title: "SmartAgri-IDQ:Quantum-Resistant Identity-Based Data Authentication Protocol for Smart Agriculture Iot", year: 2026, link: " " },
    { id: 2, title: "ANALYSIS AND PREDICTION OF FUTURE MALARIA AND TYPHOID OUTBREAKS BASED ON TIME-VARYING CONTACT RATES:AN ARIMA APPROACH", year: 2025, link: " " },
    { id: 3, title: "A Robust Lattice-Based Post-Quantum Three-Party Key Exchange Scheme for Mobile Devices", year: 2025, link: "https://onlinelibrary.wiley.com/doi/10.1002/cpe.70036" },
    { id: 4, title: "CRYPTOGRAPHY BASED ON SAWI-ELZAKI TRANSFORM", year: 2025 },
    { id: 5, title: "Unit group of group algebras of non abelian group of order up to 30", year: 2025, link: "https://dx.doi.org/10.5269/bspm.76165" },
    { id: 6, title: "LB-RFID: Provably Secure Post-quantum Authentication Protocol for RFID Devices in Resource-constrained IoT Environment", year: 2025, link: "https://link.springer.com/article/10.1007/s11277-025-11847-8" },
    { id: 7, title: "Optimal control of malaria with medicine and insecticide: A mathematical model", year: 2025 },
    { id: 8, title: "Lightweight hybrid lattice-based session key agreement protocol for multimedia IoT", year: 2025, link: "https://link.springer.com/article/10.1007/s12243-025-01122-z" },
    { id: 9, title: "SIS-Based Signature Schemes and Their Countermeasures: From Vulnerability to Vigilance", year: 2025, link: "https://link.springer.com/chapter/10.1007/978-3-031-90587-2_1" },
    { id: 10, title: "Lattice-Based Authentication Scheme for Smart Agriculture System", year: 2025, link: "https://link.springer.com/chapter/10.1007/978-981-97-8051-8_12" },
    { id: 11, title: "A matrix technique-based numerical treatment of a nonlocal singular boundary value problems", year: 2025, link: "https://onlinelibrary.wiley.com/doi/10.1002/mma.9809" },
    { id: 12, title: "Blockchain based authentication and access control protocol for IoT", year: 2024, link: "https://link.springer.com/article/10.1007/s11042-023-17607-9" },
    { id: 13, title: "A New Public Key Cryptography Using Generalized Fibonacci Matrices", year: 2024 },
    { id: 14, title: "Group Algebras of Lie Nilpotency Index 15", year: 2024, link: " " },
    { id: 15, title: "Post-quantum attack resilience blockchain-assisted data authentication protocol for smart healthcare system", year: 2024, link: "https://onlinelibrary.wiley.com/doi/10.1002/spe.3336" },
    { id: 16, title: "Network Malaria Model on Account of Wide Communication", year: 2024, link: "https://ieeexplore.ieee.org/document/10923044/" },
    { id: 17, title: "An encryption and decryption technique using planar graph with self-invertible matrix", year: 2024, link: "https://link.springer.com/article/10.1007/s10586-022-03955-y" },
    { id: 18, title: "Quantum-resistant public-key encryption and signature schemes with smaller key sizes", year: 2024 },
    { id: 19, title: "Modular group algebra with upper Lie nilpotency index 11p − 9", year: 2024, link: "https://as.yazd.ac.ir/article_3140.html" },
    { id: 20, title: "On the normal complement problem of finite group algebra", year: 2023, link: "https://www.worldscientific.com/doi/10.1142/S1793557123502029" },
    { id: 21, title: "On the Unit Group of Certain Finite Group Algebras", year: 2023 },
    { id: 22, title: "23rd Solar Cycle: Solar Activity Parameters and Associated Forbush Decreases", year: 2023, link: "https://linkinghub.elsevier.com/retrieve/pii/S027311772200984X" },
    { id: 23, title: "A new encryption scheme based on Legendre's transform", year: 2023 },
    { id: 24, title: "Quantum-defended Digital Signature on Lattice for IoT-enabled Systems", year: 2023, link: "https://link.springer.com/chapter/10.1007/978-981-19-9719-8_26" },
    { id: 25, title: "Comparison of Solar Activity Parameters and Associated Forbush Decreases in Solar Cycles 23 and 24", year: 2023, link: "https://link.springer.com/article/10.1007/s10509-022-04156-0" },
    { id: 26, title: "A note on modular group algebras with upper Lie nilpotency indices", year: 2022, link: "https://admjournal.luguniv.edu.ua/index.php/adm/article/view/1694" },
    { id: 27, title: "A comparison of Solar Cycle 23rd and 24th for Solar type II radio bursts associated with coronal mass ejection in relation to interplanetary features", year: 2022, link: "https://link.springer.com/article/10.1007/s10509-022-04156-0" },
    { id: 28, title: "Unit Groups of Group Algebras on Certain Quasidihedral Groups", year: 2022 },
    { id: 29, title: "The Structure of the Unit Group of a Group Algebra of a Group of Order 37", year: 2022 },
    { id: 30, title: "The Group of Units of Group Algebras of Abelian Groups of Order 36 and C₃ × A₄ over Any Finite Field", year: 2022, link: "https://doi.org/10.24330/ieja.1077623" },
    { id: 31, title: "Structure of Unit Group of Fₚⁿ D₆", year: 2021, link: "https://doi.org/10.1142/S1793557121500753" },
    { id: 32, title: "Unit Groups of Group Algebras of Abelian Groups of Order 32", year: 2021, link: "https://doi.org/10.22199/issn.0717-6279-4374" },
    { id: 33, title: "Modular Group Algebras with Small Upper Lie Nilpotency Index", year: 2020, link: "https://doi.org/10.1166/asem.2020.2517" },
    { id: 34, title: "Relationship Between Rising Phase of Solar Cycle 23rd and 24th with Respect to Geoeffectiveness", year: 2020, link: "https://doi.org/10.1166/asem.2020.2518" },
    { id: 35, title: "Group Algebras of Lie Nilpotency Index 14", year: 2020, link: "https://doi.org/10.1142/S1793557120500886" },
    { id: 36, title: "IoT based malaria website model using Digital Binary Code: A Mathematical Study, 2024 International Conference on IoT, Communication and Automation Technology (ICICAT), Gorakhpur, India, 2024, pp. 1671-1676, doi: 10.1109/ICICAT62666.2024.10923427", year: 2025, link: "https://doi.org/10.1109/ICICAT62666.2024.10923427" },
    { id: 37, title: "An efficient and secure undeniable signature scheme based on Ring learning with error, International Journal of Ad Hoc and Ubiquitous Computing (Accepted, SCIE, IF=0.7)", year: 2025, link: " " },
    { id: 38, title: "Solar flares associated coronal mass ejection accompanied with DH type II radio burst in relation with interplanetary magnetic field, geomagnetic storms and cosmic ray intensity", year: 2018, link: "https://doi.org/10.1016/j.newast.2017.10.001" },
    { id: 39, title: "Solar flares associated coronal mass ejections causing geo-effectiveness and Forbush decreases", year: 2017, link: "https://doi.org/10.1007/s10509-017-3024-0" },
    { id: 40, title: "Generalization of Mittag - Leffler Function and It's Properties", year: 2017, link: " " },
    { id: 41, title: "Solar flares associated coronal mass ejections in case of type II radio bursts", year: 2016, link: "https://doi.org/10.1007/s10509-016-2857-2" },
    { id: 42, title: "Strongly Lie Nilpotent Group Algebras of Index at Most 8", year: 2014, link: "https://doi.org/10.1142/S0219498814500443" },
    { id: 43, title: "Units group of semisimple group algebra of groups of order 36, Annales Mathematicae et Informaticae, DOI: 10.33039/ami.2025.10.014 (ESCI, SJR, Scopus)", year: 2025, link: "https://ami.uni-eszterhazy.hu" },
    { id: 44, title: "On Group Algebras with Unit Groups of Derived Length Three in Characteristic Three", year: 2013, link: "https://doi.org/10.5486/PMD.2013.5461" },
    { id: 45, title: "Lie Solvable Group Algebras of Derived Length Three in Characteristic Three", year: 2012, link: "https://doi.org/10.1142/S0219498812500983" },
    { id: 46, title: "Group Algebras with Unit Groups of Derived Length Three", year: 2010, link: "https://doi.org/10.1142/S0219498810003938" }
  ];

  return (
    <div className="p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#913c07] mb-3 sm:mb-4 md:mb-6">
        Publications
      </h1>

      <div className="bg-[#fff4dc] rounded-lg border-2 border-[#913c07] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-[#913c07]">
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white whitespace-nowrap">S.No.</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white">Title</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white whitespace-nowrap">Year</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white whitespace-nowrap">Link</th>
              </tr>
            </thead>
            <tbody>
              {publications.length > 0 ? (
                publications.map((pub, index) => (
                  <tr key={pub.id} className="border-b border-secondary/20 hover:bg-bgColorDark">
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 whitespace-nowrap">{index + 1}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3">
                      <span className="text-[#563c29] text-xs sm:text-sm md:text-base">{pub.title}</span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 whitespace-nowrap">{pub.year}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-center">
                      {pub.link && pub.link.trim() ? (
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center justify-center w-8 h-8 bg-[#913c07] text-white rounded-full hover:bg-[#913c07] transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <span className="text-secondary/50 font-primary">-</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-3 sm:px-4 py-8 text-center text-secondary/70 font-primary">
                    No publications added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Publications;





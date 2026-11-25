import { FiMapPin } from 'react-icons/fi';

const AboutGaulapar = () => (
  <section id="about" className="py-16 md:py-6 bg-white border-y border-slate-100 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="badge-green mb-3">गौलापार परिचय / About Gaulapar</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
          एक क्षेत्र, अनेक बस्तियां
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
          Gaulapar is commonly used for the settled area east of the Gaula River around Haldwani. It includes a mix of villages, hamlets, and road-side localities rather than one single revenue-village boundary.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-slate-200/80 bg-gov-cream-bg p-6 text-center sm:p-8">
          <div className="flex flex-col items-center">
            <div className="rounded-xl bg-gov-green-100 p-2.5 text-gov-green-800">
              <FiMapPin className="w-5 h-5" />
            </div>
            <div className="mx-auto mt-3 max-w-3xl">
              <h3 className="text-lg font-bold text-slate-900">गौलापार क्षेत्र / Regional overview</h3>
              <p lang="hi" className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                गौलापार, हल्द्वानी के दक्षिण-पूर्वी क्षेत्र में स्थित उत्तराखंड का एक खूबसूरत और विस्तृत इलाका है। यह क्षेत्र अपने गांवों, कृषि भूमि, प्राकृतिक सुंदरता और स्थानीय संस्कृति के लिए जाना जाता है। पूर्वी खेड़ा, पश्चिमी खेड़ा, चोरगलिया और आसपास की कई बस्तियां इस क्षेत्र की स्थानीय पहचान का हिस्सा हैं।
              </p>
              <p lang="en" className="mt-4 border-t border-slate-200 pt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Gaulapar is a well-known region on the southeastern side of Haldwani, Uttarakhand. It is surrounded by villages, agricultural landscapes and natural beauty. Localities such as East Khera, West Khera, Chorgalia and other nearby settlements contribute to the region's unique identity and community life.
              </p>
              <a
                href="https://www.openstreetmap.org/search?query=Gaulapar%2C%20Haldwani%2C%20Uttarakhand"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-bold text-gov-green-800 hover:text-gov-saffron-600"
              >
                View Gaulapar on OpenStreetMap
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutGaulapar;

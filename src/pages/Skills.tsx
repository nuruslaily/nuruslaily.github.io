import { categories } from "../data/categories";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        {skills.map((skill, idx) => (
          <div key={idx} className="badge badge-lg badge-primary p-4 text-center">{skill}</div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <div key={idx} className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">{category.name}</h3>
              <ul className="list-disc list-inside space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-base-content/80">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

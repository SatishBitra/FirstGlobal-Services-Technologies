import React from 'react';
import { Home, UserCheck, Landmark, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const RiseSection: React.FC = () => {
  const ecosystemEntities = [
    {
      id: 'households',
      title: 'Households',
      description: 'Rural families and consumers accessing dependable local services.',
      icon: Home,
      color: '#1557c0',
      tagline: 'Reliable Household Access',
    },
    {
      id: 'service-providers',
      title: 'Local Service Providers',
      description: 'Grassroots service entrepreneurs and technicians delivering frontline care.',
      icon: UserCheck,
      color: '#20b9df',
      tagline: 'Grassroots Enterprise Model',
    },
    {
      id: 'institutions',
      title: 'Institutions',
      description: 'Civic, financial, and regional bodies providing governance and scale.',
      icon: Landmark,
      color: '#159b8b',
      tagline: 'Civic & Financial Scale',
    },
    {
      id: 'enabling-partners',
      title: 'Enabling Partners',
      description: 'Technology, ecosystem, and network collaborators driving practical enterprise models.',
      icon: Users,
      color: '#57b957',
      tagline: 'Digital Ecosystem Synergies',
    },
  ];

  return (
    <section
      id="marketplace"
      className="py-20 md:py-28 bg-white border-b border-[#e6eaee] overflow-hidden"
      aria-label="Join the Marketplace - RISE Initiative"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Marketplace Section Anchor Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="h-1.5 w-5 sm:w-6 bg-[#1557c0] rounded-full inline-block" />
            <span className="text-[11px] sm:text-[13px] font-heading font-medium tracking-widest uppercase text-[#5f6b78]">
              JOIN THE MARKETPLACE
            </span>
          </div>

          <h2 className="font-heading font-medium text-[26px] sm:text-[36px] md:text-[44px] text-[#10243a] tracking-tight">
            RISE <sup className="text-base sm:text-xl font-normal text-[#1557c0]">®</sup> Initiative
          </h2>
        </motion.div>

        {/* RISE Core Concept Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[960px] mb-10 sm:mb-16"
        >
          <p
            id="rise-description"
            className="text-[15px] sm:text-[18px] md:text-[21px] leading-[1.65] text-[#10243a]"
          >
            RISE ® is FirstGlobal’s innovationled initiative that supports the development of organised, reliable rural service delivery. It brings together households, local service providers, institutions, and enabling partners through practical, enterprisefocused models.
          </p>
        </motion.div>

        {/* Connected Ecosystem Architecture Visual (The 4 Entities from Source) */}
        <div className="relative mt-4 sm:mt-8 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {ecosystemEntities.map((entity, index) => {
              const Icon = entity.icon;
              return (
                <motion.div
                  key={entity.id}
                  id={`ecosystem-node-${entity.id}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-[#f8fafc] hover:bg-white rounded-[14px] p-5 sm:p-6 border border-[#e6eaee] transition-all hover:shadow-[0_4px_20px_rgba(16,36,58,0.06)] flex flex-col justify-between"
                >
                  <div>
                    {/* Node Icon with brand ring */}
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] flex items-center justify-center mb-4 sm:mb-5 bg-white border border-[#e6eaee]"
                      style={{ color: entity.color }}
                    >
                      <Icon size={20} strokeWidth={1.75} className="sm:w-[22px] sm:h-[22px]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-medium text-[17px] sm:text-[19px] text-[#10243a] mb-2">
                      {entity.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] sm:text-[14px] text-[#5f6b78] leading-relaxed">
                      {entity.description}
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#e2e8f0]/60 flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: entity.color }}
                    />
                    <span className="text-[11px] sm:text-[12px] font-heading font-medium text-[#5f6b78]">
                      {entity.tagline}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

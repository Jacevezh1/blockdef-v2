import type { BlogPost, BlogCategory } from "@/types/blog"

export const categories: BlogCategory[] = [
  { id: "tokenization", name: "Tokenization", description: "Asset tokenization and digital ownership", color: "blue" },
  { id: "security", name: "Security", description: "Blockchain security and vulnerabilities", color: "red" },
  { id: "tokenomics", name: "Tokenomics", description: "Token economics and governance", color: "green" },
  { id: "defi", name: "DeFi", description: "Decentralized finance protocols", color: "purple" },
  { id: "research", name: "Research", description: "Academic research and analysis", color: "orange" },
]

export const blogPosts: BlogPost[] = [
  {
    id: "oportunidad-tokenizacion-activos-2025",
    title: "Tokenización de RWAs",
    excerpt:
      "Exploramos cómo la tokenización de RWAs está transformando los mercados financieros tradicionales, desde bienes raíces hasta commodities, con el respaldo de blockchain y marcos regulatorios emergentes.",
    content: `# La tokenización de RWAs
  
  La tokenización de activos (RWAs) ya no es una promesa: es una tendencia que está cambiando la forma en que entendemos la inversión, la propiedad y la liquidez en los mercados financieros.
  
  Según **RWA.io**, En 2024, el valor total de los activos tokenizados, incluidos las stablecoins, alcanzo los 185 mil millones de dólares. Los expertos pronostican un crecimiento impresionante, con el mercado potencialmente llegando hasta los 30 billones de dólares para 2030 (RWA.io).
  
  ## ¿A qué se debe este crecimiento?

  - **Claridad Regulatoria**  
  En Estados Unidos y Europa se están estableciendo marcos regulatorios más sólidos y claros para los activos digitales. Esto genera una base jurídica confiable que aumenta la confianza tanto de inversionistas como de instituciones financieras, asi impulsando la adopción masiva de la tokenización de activos reales.

  - **Adopción Institucional**  
  Grandes jugadores del mercado, como BlackRock y Goldman Sachs, ya están invirtiendo en bonos y activos tokenizados, lo que valida y acelera la entrada de capital institucional al ecosistema de RWAs, contribuyendo a su expansión y madurez.

  - **Stablecoins y Liquidez**  
  Las stablecoins son fundamentales para facilitar transferencias rápidas y estables dentro del ecosistema de activos tokenizados. Al estar vinculadas a fiat, ofrecen un medio de intercambio confiable que mejora la liquidez y reduce la volatilidad en las transacciones.

  - **Avances Tecnológicos**  
  La interoperabilidad entre diferentes blockchains, impulsada por redes de oráculos como Chainlink y respaldada por una comunidad creciente de desarrolladores, está permitiendo la creación de soluciones más integradas y seguras. Esto facilita la comunicación entre plataformas y mejora la escalabilidad y funcionalidad del ecosistema de RWAs.

  
  ## Segmentos Clave del Mercado
  
  Según el reporte de Mordor Intelligence, el sector inmobiliario lideró con un 30.5% del mercado en 2024, mientras que los commodities, como metales preciosos y créditos de carbono, se proyectan a crecer a un ritmo anual compuesto (CAGR) del 50.10% hasta 2030. Por tipo de inversor, los institucionales dominan con un 69.8%, pero el segmento minorista crece a un 52% CAGR. En cuanto al tipo de red blockchain, las autorizadas dominan con un 51.2%, aunque las redes abiertas están creciendo más rápido, con un 53.2% CAGR.
  
  ## El Potencial de los Activos Tokenizados
  
  Gracias a la tokenización, es posible dividir activos de alto valor, como bienes raíces, obras de arte o metales preciosos en pequeñas partes o “tokens”. Esto abre la puerta a que inversionistas con menos capital puedan participar en mercados que antes eran exclusivos para jugadores institucionales o individuos con una gran cantidad de capital. Por ejemplo, en lugar de comprar un lingote de oro completo, ahora se puede adquirir una fracción tokenizada de este lingote, lo que democratiza el acceso a distintos objetos de inversión.

  La tokenización permite:
  
  - **Propiedad Fraccionada**  
    Acceder a porciones de activos de alto valor sin necesidad de grandes sumas de capital.
  
  - **Liquidez Mejorada**  
    Activos que antes eran difíciles de vender ahora pueden intercambiarse en mercados 24/7.
  
  - **Transparencia**  
    Todas las transacciones quedan registradas en blockchain, mejorando la seguridad y reduciendo el fraude.
  
  ## Desafíos a Resolver

  - **Custodia y Almacenamiento**   
  La tokenización de activos físicos requiere soluciones de custodia que integren lo mejor del mundo digital y tradicional. No es suficiente el crear un token en la blockchain y desplegarlo, el activo real debe estar protegido de riesgos como robo, daño o pérdida. Por eso, se están desarrollando infraestructuras híbridas que combinan almacenes físicos con auditorías digitales y seguros especializados. Este es un paso crucial para generar confianza en los inversionistas y garantizar que cada token esté respaldado por un activo tangible y seguro.

  - **Marco Legal**  
  Uno de los retos más importantes es definir con claridad el estatus legal del token y su relación con el activo subyacente. ¿Qué derechos otorga el token? ¿Cómo se protege la propiedad ante disputas legales? Sin un marco regulatorio claro y armonizado entre jurisdicciones, la escalabilidad de la tokenización se ve afectada. Los avances en regulación, como los marcos de la SEC en Estados Unidos o MiCA en Europa, son vitales para proporcionar certeza jurídica y fomentar la adopción institucional.

  - **Infraestructura de Mercado**   
  Para que los activos tokenizados sean realmente líquidos y accesibles, se necesitan plataformas robustas, que permitan operaciones rápidas y seguras. Además, los oráculos son esenciales para proveer datos precisos sobre precios y estados de los activos subyacentes, evitando manipulación y errores. Finalmente, el cumplimiento normativo y las herramientas de gobernanza deben integrarse para asegurar que las transacciones respeten las leyes y protejan a todos los participantes del mercado.

  
  ## Perspectivas Futuras
  
  La combinación de avances tecnológicos, regulación avanzada e interés del mercado posicionan a la tokenización de activos como una de las mayores oportunidades del ecosistema blockchain.
  
  Y aunque aún existen retos importantes, como concluye **RWA.io**, *"la tokenización ha dejado de ser solo una innovación técnica para convertirse en una estrategia financiera prioritaria para los grandes actores del mercado."*`,
    author: { name: "Javier Aceves" },
    publishedAt: "2025-04-30",
    readTime: 7,
    views: 2870,
    category: "tokenization",
    tags: ["RWA", "Tokenización", "Blockchain", "Regulación", "Stablecoins"],
    featured: true,
    status: "analysis"
  },  
  {
    "id": "bybit-hack-2025",
    "title": "Hackeo a Bybit: Lecciones y Repercusiones",
    "excerpt": "En febrero de 2025, Bybit sufrió un hackeo por más de 1,400 millones de dólares, revelando vulnerabilidades en la seguridad de las plataformas cripto y poniendo en alerta al ecosistema de activos digitales.",
    "content": "# El Hackeo a Bybit: Lecciones y Repercusiones en el Mundo Cripto\n\nEl 21 de febrero de 2025, el exchange de criptomonedas Bybit sufrió uno de los golpes más fuertes en la historia del mundo cripto, con un robo de más de **1,400 millones de dólares**. Este hecho no solo puso en jaque la confianza en la seguridad de estas plataformas, sino que también mostró la alta peligrosidad y sofisticación de los cibercriminales detrás del ataque.\n\nEl hackeo se dio porque los hackers lograron engañar a uno de los proveedores de Bybit, cambiando sin que nadie se diera cuenta la dirección de la billetera digital donde se iban a enviar 401,000 monedas Ethereum. Bybit creyó que estaba moviendo las monedas a su propia cartera, pero en realidad se las estaban enviando directo a los ladrones digitales.\n\n## ¿Quién Está Detrás del Robo?\n\nEl grupo norcoreano **Lazarus** es conocido como uno de los mejores en el mundo para mover y blanquear criptomonedas. Ya lograron convertir al menos 300 millones de dólares de lo robado en fondos que probablemente nadie podrá recuperar.\n\n## Impacto en el Mercado Cripto\n\nEste hackeo hizo que el precio de Bitcoin y otras criptomonedas cayera fuerte, afectando la confianza de inversionistas y poniendo en evidencia las fallas de seguridad que todavía existen en este ecosistema.\n\n## Lecciones Que Nos Deja\n\nEste incidente nos recuerda lo importante que es:\n\n- **Estar bien informados en seguridad digital:** Conocer y aplicar buenas prácticas para proteger nuestros activos, identificar fraudes y usar herramientas como la autenticación multifactor para evitar caer en trampas.\n\n- **Unir fuerzas en la industria:** Que plataformas, autoridades y expertos trabajen juntos, compartiendo información y coordinando respuestas para prevenir y mitigar ataques de manera efectiva.\n\n- **Invertir en tecnología y seguridad:** Porque proteger el dinero y los datos de los usuarios debe ser la prioridad, mediante tecnologías avanzadas, monitoreo continuo y protocolos de respuesta rápida.\n\n## Conclusión\n\nLo que pasó con Bybit nos enseña que, aunque la tecnología blockchain avanza, los hackers siguen siendo muy peligrosos y están en constante evolución. Por eso, usuarios y empresas tienen que estar alerta y tomar medidas para mantener seguro su dinero en este mundo cripto que no para de crecer.",
    "author": {
      "name": "Javier Aceves"
    },
    "publishedAt": "2025-03-12",
    "readTime": 5,
    "views": 2500,
    "category": "security",
    "tags": ["Bybit", "Hackeo", "Seguridad", "Cripto"],
    "featured": false,
    "status": "analysis"
  }
  
]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getPostsByCategory(categoryId: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === categoryId)
}

export function getCategoryById(id: string): BlogCategory | undefined {
  return categories.find((category) => category.id === id)
}




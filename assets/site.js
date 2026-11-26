{
const PG=document.body.dataset.page||'';
const co=(c,t,x)=>`<span class="co"><i aria-hidden="true" style="background:${c}">${x||''}</i>${t}</span>`;
const EY=co('#ffe600','EY','EY'),MU=co('#d98a86','Musashi','M'),BE=co('#7db592','Benteler','B'),HU=co('#8fb4d9','HUOC','H');
const T={
en:{
 title:'Gabriel Cunha · Data and systems for supply chain',
 bar:'Open to <b>data, BI and software</b> roles, remote or in Recife, Brazil.<a href="#contato">Get in touch →</a>',
 n1:'How I work',n2:'Projects',n3:'Experience',n4:'Tools',cv:'Résumé',cv2:'Résumé',cv3:'Résumé →',
 n5:'Applied AI',n6:'Data stories',
 st6:'<h2>Applied AI</h2><p>Two parts of Supply OPME: an assistant that answers with the client\'s data but cannot change it, and a robot that stops bad data before it turns into a decision.</p>',
 iaf:'<div class="fs"><i>1</i><div><b>A question in plain Portuguese</b>"Which lots expire in the next 90 days?"</div></div><div class="ar"></div><div class="fs"><i>2</i><div><b>Server-side function</b>Checks the login and the quota. The AI key never reaches the browser.</div></div><div class="ar"></div><div class="fs"><i>3</i><div><b>Claude picks the queries</b>From 10 ready-made queries, all read-only.</div></div><div class="ar"></div><div class="fs"><i>4</i><div><b>Postgres with RLS</b>Each query runs with the asking user\'s login: no one sees another company\'s data.</div></div><div class="ar"></div><div class="fs"><i>5</i><div><b>Answer with its sources</b>"Queried: expiry dates · stock by product", so it can be checked.</div></div>',
 iah:'supply-opme assistant <span class="pill">Live</span>',
 iad:'Answers questions on stock, lots, expiry dates, consignment and invoices by querying the database <em>with the permissions of whoever is asking</em>. It never posts, edits or deletes anything: when asked to act, it says which screen to use.',
 iakp:'<div><b>10</b><span>ready-made queries, all read-only</span></div><div><b>&lt; US$ 0.01</b><span>per typical question, with Claude Haiku</span></div><div><b>US$ 5</b><span>monthly cap per company, adjustable</span></div><div><b>40</b><span>questions per person per day</span></div>',
 iaa:'<button class="b sm g" type="button" data-open="so">See Supply OPME</button><a class="b sm" href="https://www.supplyopme.com.br">Open site ↗</a>',
 roh:'data-robot <span class="pill">Working</span> <span class="pill pv">Private</span>',
 rod:'Before a client\'s ERP export enters the system, the robot checks every row: <em>structure, dates, duplicates, calculations and statistics</em>, such as a value out of the item\'s pattern or drift from one load to the next. It never touches the original file: it loads what passed and hands the client a list of what to fix at the source.',
 rokp:'<div><b>86</b><span>rules in 12 families</span></div><div><b>90/90</b><span>planted errors found in 15 s</span></div><div><b>234</b><span>automated tests</span></div><div><b>0</b><span>changes to the original file</span></div>',
 roa:'<button class="b sm g" type="button" data-open="robo">See screens</button>',
 st7:'<h2>Data stories</h2><p>What each dashboard says, for someone with five minutes: the charts, the conclusion and the caveats.</p>',
 hb1:'+3.1 pp', hn1:'fill rate · capital −15%',ht1:'An A/B test of two reorder policies',hk1:'Supply chain · A/B test',
 hd1:'Min-max versus forecasting on 600 SKUs, with a guardrail set in advance, CUPED, bootstrap and an A/A test. It ends in a recommendation per ABC class.',
 ha1:'<a class="b sm g" href="stories/replenishment-ab.html" data-story="replenishment-ab">Read</a><a class="b sm" href="https://github.com/gorc-supply/ab-test-replenishment">Code</a>',
 ht2:'Brazil\'s ports hit a record. Suape grew in value, not in weight.',hk2:'Ports · Power BI',hd2:'1,403.8 million tonnes in 2025, and why ships wait 4.3 h at Suape against 26.4 h at its neighbours.',
 ha2:'<a class="b sm g" href="stories/ports.html" data-story="ports">Read</a><button class="b sm" type="button" data-open="rpp">See dashboard</button>',
 ht3:'What Brazil\'s public sector pays for implants',hk3:'Healthcare · Public procurement',hd3:'One catalog code with prices 13 times apart, pacemakers 100% imported and a reimbursement table that lost 47% in real terms.',
 ha3:'<a class="b sm g" href="stories/opme-prices.html" data-story="opme-prices">Read</a><button class="b sm" type="button" data-open="rx">See dashboard</button>',
 h1:'Data and systems for the people who buy, stock and plan.',
 from:`<span class="fr"><b>Gabriel Cunha</b><span class="fl">now at</span>${EY}</span><span class="fr"><span class="fl">before</span>${MU}${BE}${HU}</span>`,
 lead:'I spent years inside warehouses, purchasing and controlling before I started coding. Today I work with SAP IBP and demand planning, and in my spare time I turn what I saw on the shop floor into systems that actually run.',
 seeproj:'See projects',
 stat:'<span><b>4</b> live systems</span><span><b>6</b> open data sources</span><span><b>3+</b> years in supply chain</span><span><b>880h+</b> of data training</span>',
 st1:'<h2>How I work</h2><p>Same path every time, from the ERP to the decision.</p>',
 r1:'<code>/extract</code><p>I pull data from SAP, spreadsheets and public APIs, with no manual copy and paste.</p><span>VBA · SAP GUI Scripting · Python</span>',
 r2:'<code>/validate</code><p>Nothing reaches the model without passing quality rules, and every error comes back with the row and the reason.</p><span>pandera · pytest · SQL</span>',
 r3:'<code>/model</code><p>I turn it into tables that answer questions: turnover, coverage, price, forecast.</p><span>DuckDB · Polars · DAX</span>',
 r4:'<code>/deliver</code><p>A dashboard, an app or a ready spreadsheet, with the math open for anyone who wants to check it.</p><span>Power BI · Streamlit · React</span>',
 st2:'<h2>Projects</h2><p>Four live systems and a Power BI dashboard, grouped by topic. Four of them open source on GitHub.</p>',
 soh:'supply-opme <span class="pill">Live</span> <span class="pill pv">My own product</span>',
 sod:'The supply chain department of an OPME distributor (orthopedic and medical implants), as a service: <em>forecasting, purchasing, lot traceability</em>, suppliers, finance and S&amp;OP, running alongside the ERP.',
 sokp:'<div><b>15</b><span>pages in the client app</span></div><div><b>474/474</b><span>forecasts matching the check engine</span></div><div><b>31s→0.5s</b><span>dashboard KPIs, before and after</span></div><div><b>1,797</b><span>database and browser tests</span></div>',
 soa:'<button class="b sm g" type="button" data-open="so">See details</button><a class="b sm" href="https://www.supplyopme.com.br">Open site ↗</a>',
 rxh:'raio-x-opme <span class="pill">Live</span>',
 rxd:'How much the Brazilian public sector pays for implants, combining <em>6 open data sources</em> in a validated pipeline.',
 rxa:'<button class="b sm g" type="button" data-open="rx">See details</button><a class="b sm" href="https://github.com/gorc-supply/raio-x-opme">View code</a><a class="b sm" href="https://raio-x-opme.streamlit.app">Open ↗</a>',
 kith:'kit-estoque-mrp <span class="pill">Live</span>',
 kitd:'Upload the ERP spreadsheet and get <em>ABC-XYZ, safety stock and MRP</em> back, all in the browser.',
 kita:'<button class="b sm g" type="button" data-open="kit">See details</button><a class="b sm" href="https://github.com/gorc-supply/kit-estoque-mrp">View code</a><a class="b sm" href="https://gorc-supply.github.io/kit-estoque-mrp/?demo=industria">Open ↗</a>',
 sgm:'<img src="img/sg-erp-x-grafo-en-t.webp" alt="SupplyGraph OPME chart comparing, by country, the share of revenue that cannot be produced without that country in the ERP view (tier 1 only) and in the graph view (full network): China is 0.4% in one and 43.6% in the other." width="1280" height="720">',
 sgh:'supplygraph-opme <span class="pill">Live</span>',
 sgd:'Which tier-3 supplier I have never heard of can stop half of my revenue? A graph digital twin (Neo4j) of an implant supply chain that shows <em>the supplier\'s supplier</em> the ERP cannot see, on a synthetic network calibrated with real open data.',
 sgkp:'<div><b>0.4% → 43.6%</b><span>of revenue cannot be produced without China: ERP view × graph view</span></div><div><b>66 of 224</b><span>components with 2+ suppliers that are really single-sourced (29%)</span></div><div style="grid-column:1/-1"><b>10 of 10</b><span>top suppliers by revenue at risk are tier-2/3; the first tier-1 is #74</span></div>',
 sga:'<a class="b sm g" href="https://supplygraph-opme.streamlit.app/?lang=en">Open demo ↗</a><a class="b sm" href="https://github.com/gorc-supply/supplygraph-opme">Code</a><a class="b sm" href="https://github.com/gorc-supply/supplygraph-opme/releases/download/v1.0-demo/supplygraph-demo-en-1080p.mp4">Video</a>',
 rpph:'raio-x-portuario <span class="pill pv">Done</span>',
 rppd:'A Power BI dashboard on Brazilian ports focused on Suape: <em>volume, berthing queues and productivity</em>, built on ANTAQ open data from 2021 to 2025, with totals checked against the official figures (1.16% gap at most per year).',
 rppkp:'<div><b>1,403.8 Mt</b><span>handled by Brazilian ports in 2025</span></div><div><b>≤ 1.16%</b><span>gap to ANTAQ\'s official total</span></div><div><b>5</b><span>pages, from Brazil down to the Suape quay</span></div><div><b>PBIP</b><span>report generated by code and tested</span></div>',
 rppt:'<span class="chip">Power BI</span><span class="chip">DAX</span><span class="chip">Python</span><span class="chip">DuckDB</span><span class="chip">Open data</span>',
 rppa:'<button class="b sm g" type="button" data-open="rpp">See details</button><a class="b sm" href="https://github.com/gorc-supply/raio-x-portuario">GitHub</a><a class="b sm" href="https://github.com/gorc-supply/raio-x-portuario/blob/main/docs/RaioXPortuario.pdf">PDF</a>',
 st3:'<h2>Other projects</h2><p>Some run on internal company data, others are still being built.</p>',
 t1:'<b>SAP → Power BI</b><b>9 VBA modules</b>',
 t2:'<b>Student portal</b><b>@upe.br login only</b>',
 t3:'<b>ETS × Prophet</b><b>× LightGBM</b>',
 t4:'<b>Peleja de</b><b>Severina</b>',
 t5:'<b>Study guide</b><b>generated by code</b>',
 t6:'<b>The fix</b><b>that backfired</b>',
 v1:'<h3>Warehouse and purchasing BI pipeline at Musashi, <em>from SAP to Power BI</em></h3><p>A VBA orchestrator that runs MB51, MB52, ME2M, ME5A, ME2L and ME1P in SAP, cleans the data in Power Query and feeds DAX dashboards. It comes with a 49-page technical guide.</p><span class="pill pv">In use at the company</span>',
 v2:'<h3>Management system for the business school student association, with <em>access by area</em></h3><p>Each area sees only its own data, the board sees everything and the academic calendar is read from the official file. Supabase, Postgres and Cloudflare.</p><span class="pill w8">Rolling out</span>',
 v3:'<h3>Does the fanciest model really win? A <em>forecasting lab</em> on Walmart\'s M5 data</h3><p>An open comparison measured by WMAPE, bias and FVA, in Python and Streamlit.</p><span class="pill w8">In progress</span>',
 v4:'<h3>A 2D pixel-art game set in a hell that is <em>the Brazilian backlands turned inside out</em></h3><p>Action-adventure in the style of A Link to the Past, built in Godot. It\'s where I practice state machines and organizing a large project.</p><span class="pill w8">In development</span>',
 v5:'<h3>Teaching-assistant study guides built by <em>Python pipelines</em></h3><p>FIFO, LIFO, weighted average cost, economic order quantity and stock cards, with ReportLab, WeasyPrint and Playwright.</p><span class="pill pv">Done</span>',
 v6:'<h3>How a spreadsheet showed that an improvement was <em>increasing the consumption</em> of welding electrodes</h3><p>In Benteler\'s controlling team, the data showed the opposite of the expected effect and the problem was fixed at the source.</p><span class="pill pv">Real case</span>',
 st4:'<h2>Experience</h2><p>Each place gave me one part of the chain: orders, purchasing, cost, inventory and planning.</p>',
 b1:'<h3>EY <small>Supply &amp; Operations Trainee</small><span>Aug 2026 – present</span></h3><p>Supply Chain &amp; Operations consulting with <em>SAP IBP</em>, in demand and supply planning routines.</p>',
 b2:'<h3>Musashi do Brasil <small>Procurement Intern</small><span>2025 – 2026</span></h3><p>Took part in rolling out <em>inventory MRP in SAP S/4HANA</em>, with better accuracy and fewer zero-stock materials, and cut the weekly procurement report from 4 hours to 1.</p>',
 b3:'<h3>Benteler Sistemas Automotivos <small>Controlling Intern</small><span>2024 – 2025</span></h3><p>Forecast, budget and gross margin, automated sales data consolidation, and the analysis that exposed a false improvement in electrode consumption.</p>',
 b4:'<h3>Hospital Universitário Oswaldo Cruz <small>Purchasing Intern</small><span>2023 – 2024</span></h3><p>Quotes and supplier comparisons for hospital supplies, weighing cost and quality.</p>',
 b5:'<h3>Level Group <small>Follow-up Intern</small><span>2022 – 2023</span></h3><p>Purchase order cycle tracking and lead time and cost analysis to find bottlenecks.</p>',
 st5:'<h2>Tools</h2><p>Everything here shows up in at least one project or work routine.</p>',
 tg1:'data',tg4:'erp &amp; supply',ch1:'Excel &amp; VBA',ch2:'SAP S/4HANA MM &amp; MRP',ch3:'Safety stock',
 edu:'<div><b>Bachelor of Business Administration</b><span>FCAP/UPE · 2023 – 2026</span></div><div><b>Associate degree in Logistics</b><span>UFBRA · in progress</span></div><div><b>Technical diploma in Finance</b><span>Escola Politécnica Brasileira · 2024 – 2025</span></div><div><b>Technical diploma in Administration</b><span>ETE Prof. Lucilo Ávila · 2022 – 2023</span></div><div><b>Data courses, 880h+</b><span>Alura · SQL, BI, Power BI, Python, Airflow, Databricks</span></div><div><b>Languages</b><span>Portuguese (native) · English and Spanish (intermediate)</span></div>',
 ctah:'Let\'s talk',ctap:'I\'m looking for data analyst, BI and software roles, ideally connected to supply chain.',
 close:'Close',close2:'Close',zoom:'Enlarge',
 zh1:'OPME &amp; healthcare',
 zk1:'3 systems · applied AI · 1 story',
 zd1:'Orthopedic and cardiac implants, from the tier-3 supplier to the hospital: a distributor\'s supply chain as a service, multi-tier risk as a graph and what the public sector pays.',
 zc1:'<span class="chip">supplygraph-opme</span><span class="chip">supply-opme</span><span class="chip">raio-x-opme</span><span class="chip">AI assistant</span><span class="chip">data-robot</span>',
 zp1:'<h1>OPME &amp; healthcare</h1><p>Systems for the orthopedic and cardiac implant (OPME) supply chain: from purchasing and lot traceability at the distributor to the risk hidden in tier-2 and tier-3 suppliers and the prices the public sector pays.</p>',
 tt_opme:'OPME & healthcare · Gabriel Cunha',
 zh2:'Planning &amp; inventory',
 zk2:'1 system · 1 story · 1 in progress',
 zd2:'ABC-XYZ, safety stock and MRP in the browser, an A/B test of replenishment policies and a demand forecasting lab.',
 zc2:'<span class="chip">kit-estoque-mrp</span><span class="chip">replenishment A/B test</span><span class="chip">forecasting lab</span>',
 zp2:'<h1>Planning &amp; inventory</h1><p>Materials planning in practice: classifying items, sizing safety stock, running MRP and measuring which replenishment policy works best.</p>',
 tt_planejamento:'Planning & inventory · Gabriel Cunha',
 zh3:'Data analysis &amp; BI',
 zk3:'1 dashboard · 1 story · 2 workplace cases',
 zd3:'A Power BI dashboard on Brazilian ports, the SAP-to-Power BI pipeline at Musashi and the analysis that showed an improvement was increasing consumption.',
 zc3:'<span class="chip">raio-x-portuario</span><span class="chip">SAP → Power BI</span><span class="chip">the fix that backfired</span>',
 zp3:'<h1>Data analysis &amp; BI</h1><p>Power BI dashboards and analyses on open and company data: from what moves through Brazil\'s ports to a procurement report pulled straight from SAP.</p>',
 tt_dados:'Data analysis & BI · Gabriel Cunha',
 zh4:'Software &amp; other projects',
 zk4:'3 projects',
 zd4:'Beyond supply chain: a student association management system with access by area, a 2D game in Godot and study guides generated by code.',
 zc4:'<span class="chip">Student portal</span><span class="chip">Peleja de Severina</span><span class="chip">code-built study guides</span>',
 zp4:'<h1>Software &amp; other projects</h1><p>Projects outside supply chain, where I practice web development, games and document automation.</p>',
 tt_outros:'Software & other projects · Gabriel Cunha',
 zv:'See projects →',
 zb:'← All topics',
 zs1:'Data story',
 zs2:'Other work'
},
es:{
 title:'Gabriel Cunha · Datos y sistemas para supply chain',
 bar:'Disponible para vacantes de <b>datos, BI y desarrollo</b>, remotas o en Recife, Brasil.<a href="#contato">Hablemos →</a>',
 n1:'Cómo trabajo',n2:'Proyectos',n3:'Trayectoria',n4:'Herramientas',cv:'CV (EN)',cv2:'CV (EN)',cv3:'CV (EN) →',
 n5:'IA aplicada',n6:'Historias',
 st6:'<h2>IA aplicada</h2><p>Dos piezas de Supply OPME: un asistente que responde con los datos del cliente sin poder modificarlos, y un robot que frena el dato malo antes de que se convierta en decisión.</p>',
 iaf:'<div class="fs"><i>1</i><div><b>Una pregunta en portugués</b>"¿Qué lotes vencen en los próximos 90 días?"</div></div><div class="ar"></div><div class="fs"><i>2</i><div><b>Función en el servidor</b>Verifica el inicio de sesión y la cuota. La clave de la IA nunca llega al navegador.</div></div><div class="ar"></div><div class="fs"><i>3</i><div><b>Claude elige las consultas</b>Entre 10 consultas listas, todas de solo lectura.</div></div><div class="ar"></div><div class="fs"><i>4</i><div><b>Postgres con RLS</b>Cada consulta corre con el usuario de quien preguntó: nadie ve datos de otra empresa.</div></div><div class="ar"></div><div class="fs"><i>5</i><div><b>Respuesta con fuente</b>"Consultó: vencimientos · posición por producto", para verificar.</div></div>',
 iah:'asistente de supply-opme <span class="pill">En línea</span>',
 iad:'Responde sobre stock, lotes, vencimientos, consignación y facturas consultando la base de datos <em>con los permisos de quien pregunta</em>. No registra, no corrige y no borra nada: cuando le piden una acción, explica en qué pantalla hacerla.',
 iakp:'<div><b>10</b><span>consultas listas, todas de solo lectura</span></div><div><b>&lt; US$ 0,01</b><span>por pregunta típica, con Claude Haiku</span></div><div><b>US$ 5</b><span>tope mensual por empresa, ajustable</span></div><div><b>40</b><span>preguntas por persona por día</span></div>',
 iaa:'<button class="b sm g" type="button" data-open="so">Ver Supply OPME</button><a class="b sm" href="https://www.supplyopme.com.br">Abrir sitio ↗</a>',
 roh:'robot-de-datos <span class="pill">Funcionando</span> <span class="pill pv">Privado</span>',
 rod:'Antes de que el archivo del ERP del cliente entre al sistema, el robot revisa cada fila: <em>estructura, fechas, duplicados, cálculos y estadística</em>, como un valor fuera del patrón del ítem o un cambio entre una carga y otra. No toca el archivo original: sube lo que pasó y le devuelve al cliente la lista de lo que debe corregir en el origen.',
 rokp:'<div><b>86</b><span>reglas en 12 familias</span></div><div><b>90/90</b><span>errores plantados encontrados en 15 s</span></div><div><b>234</b><span>pruebas automatizadas</span></div><div><b>0</b><span>cambios en el archivo original</span></div>',
 roa:'<button class="b sm g" type="button" data-open="robo">Ver pantallas</button>',
 st7:'<h2>Historias con datos</h2><p>Lo que dice cada panel, para quien tiene cinco minutos: los gráficos, la conclusión y las salvedades.</p>',
 hn1:'fill rate · capital −15%',ht1:'Un test A/B de dos políticas de reposición',hk1:'Supply chain · Test A/B',
 hd1:'Mín-máx contra pronóstico en 600 SKUs, con guardrail definido antes, CUPED, bootstrap y test A/A. Termina en una recomendación por clase ABC.',
 ha1:'<a class="b sm g" href="stories/replenishment-ab.es.html" data-story="replenishment-ab">Leer</a><a class="b sm" href="https://github.com/gorc-supply/ab-test-replenishment">Código</a>',
 ht2:'Los puertos de Brasil batieron un récord. Suape creció en valor, no en peso.',hk2:'Puertos · Power BI',hd2:'1.403,8 millones de toneladas en 2025, y por qué el buque espera 4,3 h en Suape frente a 26,4 h en sus vecinos.',
 ha2:'<a class="b sm g" href="stories/ports.es.html" data-story="ports">Leer</a><button class="b sm" type="button" data-open="rpp">Ver panel</button>',
 ht3:'Cuánto paga el sector público brasileño por implantes',hk3:'Salud · Compras públicas',hd3:'El mismo código de catálogo con precios 13 veces distintos, marcapasos 100% importados y una tabla SUS que perdió 47% en términos reales.',
 ha3:'<a class="b sm g" href="stories/opme-prices.es.html" data-story="opme-prices">Leer</a><button class="b sm" type="button" data-open="rx">Ver panel</button>',
 h1:'Datos y sistemas para quienes compran, almacenan y planifican.',
 from:`<span class="fr"><b>Gabriel Cunha</b><span class="fl">hoy en</span>${EY}</span><span class="fr"><span class="fl">antes</span>${MU}${BE}${HU}</span>`,
 lead:'Pasé años dentro de almacenes, compras y controlling antes de empezar a programar. Hoy trabajo con SAP IBP y planificación de la demanda, y en mi tiempo libre convierto lo que vi en la planta en sistemas que funcionan de verdad.',
 seeproj:'Ver proyectos',
 stat:'<span><b>4</b> sistemas en línea</span><span><b>6</b> fuentes de datos abiertos</span><span><b>3+</b> años en supply chain</span><span><b>880h+</b> de formación en datos</span>',
 st1:'<h2>Cómo trabajo</h2><p>El camino es siempre el mismo, del ERP a la decisión.</p>',
 r1:'<code>/extraer</code><p>Saco los datos de SAP, de hojas de cálculo y de APIs públicas, sin copiar y pegar a mano.</p><span>VBA · SAP GUI Scripting · Python</span>',
 r2:'<code>/validar</code><p>Nada entra al modelo sin pasar por reglas de calidad, y cada error vuelve con la fila y el motivo.</p><span>pandera · pytest · SQL</span>',
 r3:'<code>/modelar</code><p>Lo transformo en tablas que responden preguntas: rotación, cobertura, precio, pronóstico.</p><span>DuckDB · Polars · DAX</span>',
 r4:'<code>/entregar</code><p>Un panel, una aplicación o una hoja lista, con el cálculo abierto para quien quiera revisarlo.</p><span>Power BI · Streamlit · React</span>',
 st2:'<h2>Proyectos</h2><p>Cuatro sistemas en línea y un panel de Power BI, agrupados por tema. Cuatro con código abierto en GitHub.</p>',
 soh:'supply-opme <span class="pill">En línea</span> <span class="pill pv">Producto propio</span>',
 sod:'El departamento de supply chain de una distribuidora de OPME (implantes ortopédicos y médicos), como servicio: <em>pronóstico, compras, trazabilidad por lote</em>, proveedores, finanzas y S&amp;OP, funcionando junto al ERP.',
 sokp:'<div><b>15</b><span>páginas en el sistema del cliente</span></div><div><b>474/474</b><span>pronósticos iguales al motor de verificación</span></div><div><b>31s→0,5s</b><span>indicadores del panel, antes y después</span></div><div><b>1.797</b><span>pruebas de base de datos y navegador</span></div>',
 soa:'<button class="b sm g" type="button" data-open="so">Ver detalles</button><a class="b sm" href="https://www.supplyopme.com.br">Abrir sitio ↗</a>',
 rxh:'raio-x-opme <span class="pill">En línea</span>',
 rxd:'Cuánto paga el sector público brasileño por implantes, cruzando <em>6 fuentes de datos abiertos</em> en un pipeline con validación.',
 rxa:'<button class="b sm g" type="button" data-open="rx">Ver detalles</button><a class="b sm" href="https://github.com/gorc-supply/raio-x-opme">Ver código</a><a class="b sm" href="https://raio-x-opme.streamlit.app">Abrir ↗</a>',
 kith:'kit-estoque-mrp <span class="pill">En línea</span>',
 kitd:'Sube la hoja del ERP y recibe <em>ABC-XYZ, stock de seguridad y MRP</em>, todo en el navegador.',
 kita:'<button class="b sm g" type="button" data-open="kit">Ver detalles</button><a class="b sm" href="https://github.com/gorc-supply/kit-estoque-mrp">Ver código</a><a class="b sm" href="https://gorc-supply.github.io/kit-estoque-mrp/?demo=industria">Abrir ↗</a>',
 sgm:'<img src="img/sg-erp-x-grafo-en-t.webp" alt="Gráfico de SupplyGraph OPME que compara, por país, la parte de los ingresos que no existe sin ese país en la vista del ERP (solo tier 1) y en la vista del grafo (red completa): China tiene 0,4% en una y 43,6% en la otra." width="1280" height="720">',
 sgh:'supplygraph-opme <span class="pill">En línea</span>',
 sgd:'¿Qué proveedor de tier 3 que ni conozco puede detener la mitad de mis ingresos? Gemelo digital en grafo (Neo4j) de una cadena de implantes que muestra <em>al proveedor del proveedor</em> que el ERP no ve, en una red sintética calibrada con datos abiertos reales.',
 sgkp:'<div><b>0,4% → 43,6%</b><span>de los ingresos no existe sin China: vista del ERP × vista del grafo</span></div><div><b>66 de 224</b><span>componentes con 2+ proveedores que, en la práctica, tienen fuente única (29%)</span></div><div style="grid-column:1/-1"><b>10 de 10</b><span>mayores riesgos de ingresos son proveedores tier-2/3; el primer tier-1 es el 74.º</span></div>',
 sga:'<a class="b sm g" href="https://supplygraph-opme.streamlit.app/?lang=en">Abrir demo ↗</a><a class="b sm" href="https://github.com/gorc-supply/supplygraph-opme">Código</a><a class="b sm" href="https://github.com/gorc-supply/supplygraph-opme/releases/download/v1.0-demo/supplygraph-demo-en-1080p.mp4">Video</a>',
 rpph:'raio-x-portuario <span class="pill pv">Concluido</span>',
 rppd:'Panel de Power BI de los puertos brasileños con foco en Suape: <em>volumen, espera para atracar y productividad</em>, con datos abiertos de ANTAQ de 2021 a 2025 y totales verificados contra los oficiales (diferencia máxima de 1,16% al año).',
 rppkp:'<div><b>1.403,8 Mt</b><span>movidas por los puertos brasileños en 2025</span></div><div><b>≤ 1,16%</b><span>de diferencia con el total oficial de ANTAQ</span></div><div><b>5</b><span>páginas, de Brasil al muelle de Suape</span></div><div><b>PBIP</b><span>informe generado por código y probado</span></div>',
 rppt:'<span class="chip">Power BI</span><span class="chip">DAX</span><span class="chip">Python</span><span class="chip">DuckDB</span><span class="chip">Datos abiertos</span>',
 rppa:'<button class="b sm g" type="button" data-open="rpp">Ver detalles</button><a class="b sm" href="https://github.com/gorc-supply/raio-x-portuario">GitHub</a><a class="b sm" href="https://github.com/gorc-supply/raio-x-portuario/blob/main/docs/RaioXPortuario.pdf">PDF</a>',
 st3:'<h2>Otros proyectos</h2><p>Algunos funcionan con datos internos de empresa, otros todavía están en construcción.</p>',
 t1:'<b>SAP → Power BI</b><b>9 módulos VBA</b>',
 t2:'<b>Portal del DA</b><b>Login solo @upe.br</b>',
 t3:'<b>ETS × Prophet</b><b>× LightGBM</b>',
 t4:'<b>Peleja de</b><b>Severina</b>',
 t5:'<b>Apuntes</b><b>generados por código</b>',
 t6:'<b>La mejora</b><b>que empeoraba</b>',
 v1:'<h3>Pipeline de BI de almacén y compras en Musashi, <em>de SAP a Power BI</em></h3><p>Un orquestador VBA que ejecuta MB51, MB52, ME2M, ME5A, ME2L y ME1P en SAP, trata los datos en Power Query y alimenta paneles con DAX. Tiene una guía técnica de 49 páginas.</p><span class="pill pv">En uso en la empresa</span>',
 v2:'<h3>Sistema de gestión del centro de estudiantes de Administración con <em>acceso por área</em></h3><p>Cada área ve solo lo suyo, la directiva ve todo y el calendario académico se lee del archivo oficial. Supabase, Postgres y Cloudflare.</p><span class="pill w8">En implantación</span>',
 v3:'<h3>¿El modelo más sofisticado gana de verdad? <em>Laboratorio de pronóstico</em> con el M5 de Walmart</h3><p>Comparación abierta medida por WMAPE, sesgo y FVA, en Python y Streamlit.</p><span class="pill w8">En construcción</span>',
 v4:'<h3>Juego 2D en pixel art en un infierno que es <em>el sertón nordestino al revés</em></h3><p>Acción y aventura al estilo de A Link to the Past, hecho en Godot. Es donde practico máquinas de estados y la organización de un proyecto grande.</p><span class="pill w8">En desarrollo</span>',
 v5:'<h3>Apuntes de la monitoría armados con <em>pipelines en Python</em></h3><p>PEPS, UEPS, costo promedio, lote económico y fichas kardex, con ReportLab, WeasyPrint y Playwright.</p><span class="pill pv">Concluido</span>',
 v6:'<h3>Cómo una hoja de cálculo mostró que una mejora <em>aumentaba el consumo</em> de electrodos</h3><p>En el controlling de Benteler, los datos mostraron el efecto contrario al esperado y el problema se corrigió en el origen.</p><span class="pill pv">Caso real</span>',
 st4:'<h2>Trayectoria</h2><p>Cada lugar me dejó una parte de la cadena: pedidos, compras, costos, inventario y planificación.</p>',
 b1:'<h3>EY <small>Trainee de Supply &amp; Operations</small><span>ago/2026 – hoy</span></h3><p>Consultoría en Supply Chain &amp; Operations con <em>SAP IBP</em>, en las rutinas de planificación de demanda y suministro.</p>',
 b2:'<h3>Musashi do Brasil <small>Pasante de Suministros</small><span>2025 – 2026</span></h3><p>Participé en la implantación del <em>MRP de inventarios en SAP S/4HANA</em>, con más precisión y menos materiales en cero, y bajé el informe semanal de suministros de 4 horas a 1.</p>',
 b3:'<h3>Benteler Sistemas Automotivos <small>Pasante de Controlling</small><span>2024 – 2025</span></h3><p>Forecast, presupuesto y margen bruto, automatización de la consolidación de ventas y el análisis que desmontó una falsa mejora en el consumo de electrodos.</p>',
 b4:'<h3>Hospital Universitário Oswaldo Cruz <small>Pasante de Compras</small><span>2023 – 2024</span></h3><p>Cotizaciones y comparativos de proveedores de materiales hospitalarios, sopesando costo y calidad.</p>',
 b5:'<h3>Level Group <small>Pasante de Follow-up</small><span>2022 – 2023</span></h3><p>Seguimiento del ciclo de órdenes de compra y análisis de plazos y costos para encontrar cuellos de botella.</p>',
 st5:'<h2>Herramientas</h2><p>Todo lo que está aquí aparece en al menos un proyecto o rutina de trabajo.</p>',
 tg1:'datos',tg4:'erp y supply',ch1:'Excel y VBA',ch2:'SAP S/4HANA MM y MRP',ch3:'Stock de seguridad',
 edu:'<div><b>Licenciatura en Administración</b><span>FCAP/UPE · 2023 – 2026</span></div><div><b>Tecnicatura superior en Logística</b><span>UFBRA · en curso</span></div><div><b>Técnico en Finanzas</b><span>Escola Politécnica Brasileira · 2024 – 2025</span></div><div><b>Técnico en Administración</b><span>ETE Prof. Lucilo Ávila · 2022 – 2023</span></div><div><b>Formación en datos, 880h+</b><span>Alura · SQL, BI, Power BI, Python, Airflow, Databricks</span></div><div><b>Idiomas</b><span>Portugués nativo · inglés y español intermedios</span></div>',
 ctah:'¿Hablamos?',ctap:'Busco vacantes de analista de datos, BI y desarrollo, preferentemente ligadas a supply chain.',
 close:'Cerrar',close2:'Cerrar',zoom:'Ampliar',
 zh1:'OPME y salud',
 zk1:'3 sistemas · IA aplicada · 1 historia',
 zd1:'Implantes ortopédicos y cardíacos, del proveedor de tier 3 al hospital: el supply chain de la distribuidora como servicio, el riesgo multi-tier en grafo y cuánto paga el sector público.',
 zc1:'<span class="chip">supplygraph-opme</span><span class="chip">supply-opme</span><span class="chip">raio-x-opme</span><span class="chip">asistente con IA</span><span class="chip">robot-de-datos</span>',
 zp1:'<h1>OPME y salud</h1><p>Sistemas para la cadena de implantes ortopédicos y cardíacos (OPME): de la compra y la trazabilidad por lote en la distribuidora al riesgo oculto en los proveedores de tier 2 y 3 y a los precios que paga el sector público.</p>',
 tt_opme:'OPME y salud · Gabriel Cunha',
 zh2:'Planificación e inventario',
 zk2:'1 sistema · 1 historia · 1 en construcción',
 zd2:'ABC-XYZ, stock de seguridad y MRP en el navegador, un test A/B de políticas de reposición y un laboratorio de pronóstico de demanda.',
 zc2:'<span class="chip">kit-estoque-mrp</span><span class="chip">test A/B de reposición</span><span class="chip">laboratorio de pronóstico</span>',
 zp2:'<h1>Planificación e inventario</h1><p>Planificación de materiales en la práctica: clasificar ítems, dimensionar el stock de seguridad, correr el MRP y medir qué política de reposición funciona mejor.</p>',
 tt_planejamento:'Planificación e inventario · Gabriel Cunha',
 zh3:'Análisis de datos y BI',
 zk3:'1 panel · 1 historia · 2 casos de empresa',
 zd3:'El panel de Power BI de los puertos brasileños, el pipeline de BI desde SAP en Musashi y el análisis que mostró que una mejora aumentaba el consumo.',
 zc3:'<span class="chip">raio-x-portuario</span><span class="chip">SAP → Power BI</span><span class="chip">la mejora que empeoraba</span>',
 zp3:'<h1>Análisis de datos y BI</h1><p>Paneles de Power BI y análisis con datos abiertos y de empresa: de lo que mueven los puertos de Brasil al informe de compras que sale directo de SAP.</p>',
 tt_dados:'Análisis de datos y BI · Gabriel Cunha',
 zh4:'Desarrollo y otros',
 zk4:'3 proyectos',
 zd4:'Fuera de supply chain: un sistema de gestión estudiantil con acceso por área, un juego 2D en Godot y apuntes generados por código.',
 zc4:'<span class="chip">Portal del DA</span><span class="chip">Peleja de Severina</span><span class="chip">apuntes por código</span>',
 zp4:'<h1>Desarrollo y otros</h1><p>Proyectos fuera de supply chain, donde practico desarrollo web, juegos y automatización de documentos.</p>',
 tt_outros:'Desarrollo y otros · Gabriel Cunha',
 zv:'Ver proyectos →',
 zb:'← Todos los temas',
 zs1:'Historia con datos',
 zs2:'Otros trabajos'
}};
const U={pt:{copy:'Copiar e-mail',copied:'E-mail copiado',video:'Vídeo',group:'Idioma'},en:{copy:'Copy email',copied:'Email copied',video:'Video',group:'Language'},es:{copy:'Copiar e-mail',copied:'E-mail copiado',video:'Video',group:'Idioma'}};
const P={
 so:{n:'supply-opme',
  q:['O departamento de supply chain de uma distribuidora de OPME, como serviço, rodando ao lado do ERP que ela já usa.','The supply chain department of an OPME distributor, as a service, running alongside the ERP it already uses.','El departamento de supply chain de una distribuidora de OPME, como servicio, funcionando junto al ERP que ya usa.'],
  v:['video/supply-opme-tour.mp4','img/so-painel-t.webp',['Tour pelas telas com a empresa fictícia de demonstração.','Screen tour using the fictional demo company.','Recorrido por las pantallas con la empresa ficticia de demostración.']],
  m:[['so-painel',['Painel de gestão: cobertura, giro, validade, rastreabilidade e a fila de ações do dia.','Management dashboard: coverage, turnover, expiry, traceability and the day\'s action queue.','Panel de gestión: cobertura, rotación, vencimiento, trazabilidad y la cola de acciones del día.']],
     ['so-planejamento',['Planejamento: erro e viés da previsão, riscos de ruptura e sugestão de compra com a conta aberta.','Planning: forecast error and bias, stockout risks and purchase suggestions with the math open.','Planificación: error y sesgo del pronóstico, riesgos de quiebre de stock y sugerencia de compra con el cálculo abierto.']],
     ['so-fornecedores',['Scorecard de fornecedores: OTIF, prazo real, preço, documentos e ocorrências.','Supplier scorecard: OTIF, actual lead time, price, documents and incidents.','Scorecard de proveedores: OTIF, plazo real, precio, documentos e incidencias.']]],
  li:[['Sistema web completo: painel, planejamento de demanda, compras com aprovação por alçada, fornecedores, consignação em hospitais, notas por XML, planilha ou DANFE, <b>rastreabilidade por lote e registro Anvisa</b> com quarentena e recall, almoxarifado em 3D, financeiro e S&amp;OP.','Previsão por média móvel, SES, Croston-SBA e TSB, escolhida pelo menor erro recente e com backtest. Conferi o motor contra um segundo, escrito à parte em Python: <b>474 previsões idênticas</b>.','Multiempresa com isolamento no próprio banco (RLS no Postgres): cada empresa vê só os seus dados e cada usuário só as áreas liberadas.','Otimizei as consultas e os indicadores do painel caíram de <b>31 s para 0,5 s</b>, medidos com a segurança por linha ligada, numa base de teste com 3.000 produtos e 9.000 lotes.','<b>1.029 verificações no banco e 768 testes no navegador</b> (Playwright e acessibilidade com axe-core) a cada push, mais trava contra dado de paciente e assistente de IA que só lê.'],
      ['A full web system: dashboard, demand planning, purchasing with approval limits, suppliers, hospital consignment, invoices from XML, spreadsheet or DANFE PDF, <b>lot and ANVISA registration traceability</b> with quarantine and recall, 3D warehouse, finance and S&amp;OP.','Forecasting by moving average, SES, Croston-SBA and TSB, picked by the lowest recent error and backtested. I checked the engine against a second one written separately in Python: <b>474 identical forecasts</b>.','Multi-company, with isolation enforced in the database itself (Postgres RLS): each company sees only its own data and each user only the areas they were given.','I optimized the queries and the dashboard KPIs dropped from <b>31 s to 0.5 s</b>, measured with row-level security on, on a test base with 3,000 products and 9,000 lots.','<b>1,029 database checks and 768 browser tests</b> (Playwright plus axe-core accessibility) on every push, plus a guard against patient data and a read-only AI assistant.'],
      ['Sistema web completo: panel, planificación de la demanda, compras con aprobación por niveles, proveedores, consignación en hospitales, facturas por XML, hoja de cálculo o DANFE, <b>trazabilidad por lote y registro ANVISA</b> con cuarentena y recall, almacén en 3D, finanzas y S&amp;OP.','Pronóstico por media móvil, SES, Croston-SBA y TSB, elegido por el menor error reciente y con backtest. Verifiqué el motor contra un segundo, escrito aparte en Python: <b>474 pronósticos idénticos</b>.','Multiempresa con aislamiento en la propia base de datos (RLS en Postgres): cada empresa ve solo sus datos y cada usuario solo las áreas habilitadas.','Optimicé las consultas y los indicadores del panel bajaron de <b>31 s a 0,5 s</b>, medidos con la seguridad por fila activada, en una base de prueba con 3.000 productos y 9.000 lotes.','<b>1.029 verificaciones en la base de datos y 768 pruebas en el navegador</b> (Playwright y accesibilidad con axe-core) en cada push, además de un bloqueo contra datos de pacientes y un asistente de IA que solo lee.']],
  c:['PostgreSQL','Supabase','JavaScript','three.js','Deno',['API da Anthropic','Anthropic API','API de Anthropic'],'Playwright','Cloudflare Pages','GitHub Actions'],
  a:[[['Abrir site ↗','Open site ↗','Abrir sitio ↗'],'https://www.supplyopme.com.br',1]],
  note:['Código privado, por ser um produto comercial. O site tem um vídeo de 4 minutos mostrando o sistema.','Private code, since it\'s a commercial product. The site has a 4-minute video walking through the system.','Código privado, por ser un producto comercial. El sitio tiene un video de 4 minutos que muestra el sistema.']},
 rx:{n:'raio-x-opme',
  q:['Quanto o setor público paga por stents, próteses e implantes, e quanto disso depende de importação?','How much does the Brazilian public sector pay for stents, prostheses and implants, and how much of it depends on imports?','¿Cuánto paga el sector público brasileño por stents, prótesis e implantes, y cuánto de eso depende de importaciones?'],
  v:['video/raio-x-opme-tour.mp4','img/rx-inicio-t.webp',['Tour pelas telas: início, preços por UF, explorar item e importação.','Screen tour: home, prices by state, item explorer and imports.','Recorrido: inicio, precios por estado, explorar ítem e importación.']],
  m:[['rx-inicio',['Página inicial com indicadores e achados de robustez forte.','Home page with indicators and strong-robustness findings.','Página de inicio con indicadores y hallazgos de robustez fuerte.']],
     ['rx-precos-uf',['Mapa e distribuição de preços por UF.','Map and price distribution by state.','Mapa y distribución de precios por estado.']],
     ['rx-explorar',['Explorar item: distribuição, série em R$ constantes, fornecedores e compras.','Item explorer: distribution, series in constant BRL, suppliers and purchases.','Explorar ítem: distribución, serie en reales constantes, proveedores y compras.']],
     ['rx-importacao',['Importação: série, balança comercial, países de origem e registros ANVISA.','Imports: time series, trade balance, countries of origin and ANVISA registrations.','Importación: serie, balanza comercial, países de origen y registros ANVISA.']],
     ['rx-tabela-sus',['Preço pago dividido pelo valor da Tabela SUS (SIGTAP).','Price paid divided by the SUS reference table value (SIGTAP).','Precio pagado dividido por el valor de la tabla SUS (SIGTAP).']],
     ['rx-celular-escuro',['Versão de celular no modo escuro.','Mobile version in dark mode.','Versión móvil en modo oscuro.'],1]],
  li:[['Pipeline que cruza <b>6 fontes abertas</b> (Compras.gov.br, ComexStat, Banco Central, IBGE, ANVISA e SIGTAP) em camadas raw, bronze, silver e gold.','<b>783 compras</b> de 25 itens em 25 UFs, de nov/2024 a out/2026, corrigidas pelo IPCA.','Comparação entre estados só com o mesmo código CATMAT, amostra mínima e intervalo de confiança por bootstrap. Nenhuma diferença passou em todas as regras, e eu publiquei isso como achado.','Validação com pandera que derruba o pipeline se o schema quebrar, modo offline e atualização mensal automática.','Um dos achados: <b>os 51 registros vigentes de marca-passo</b> na ANVISA têm só fabricante estrangeiro.'],
      ['A pipeline that combines <b>6 open data sources</b> (Compras.gov.br, ComexStat, Central Bank of Brazil, IBGE, ANVISA and SIGTAP) in raw, bronze, silver and gold layers.','<b>783 purchases</b> of 25 items across 25 states, Nov 2024 to Oct 2026, adjusted for inflation (IPCA).','State comparisons only with the same CATMAT code, a minimum sample and bootstrap confidence intervals. No gap passed every rule, and I published that as a finding.','pandera validation that stops the pipeline if the schema breaks, offline mode and an automatic monthly refresh.','One finding: <b>all 51 active pacemaker registrations</b> at ANVISA list only foreign manufacturers.'],
      ['Pipeline que cruza <b>6 fuentes abiertas</b> (Compras.gov.br, ComexStat, Banco Central de Brasil, IBGE, ANVISA y SIGTAP) en capas raw, bronze, silver y gold.','<b>783 compras</b> de 25 ítems en 25 estados, de nov/2024 a oct/2026, ajustadas por la inflación (IPCA).','Comparación entre estados solo con el mismo código CATMAT, muestra mínima e intervalo de confianza por bootstrap. Ninguna diferencia pasó todas las reglas, y lo publiqué como hallazgo.','Validación con pandera que detiene el pipeline si el esquema se rompe, modo offline y actualización mensual automática.','Un hallazgo: <b>los 51 registros vigentes de marcapasos</b> en ANVISA tienen solo fabricantes extranjeros.']],
  c:['Python 3.12','Polars','DuckDB','pandera','Streamlit','pytest','GitHub Actions'],
  a:[[['Abrir o painel ↗','Open dashboard ↗','Abrir el panel ↗'],'https://raio-x-opme.streamlit.app',1],[['Ver código','View code','Ver código'],'https://github.com/gorc-supply/raio-x-opme']]},
 rpp:{n:'raio-x-portuario',
  q:['Quanto os portos brasileiros movimentam, onde os navios esperam e como Suape se compara aos vizinhos do Nordeste?','How much do Brazilian ports handle, where do ships wait, and how does Suape compare with its Northeast neighbors?','¿Cuánto mueven los puertos brasileños, dónde esperan los buques y cómo se compara Suape con sus vecinos del Nordeste?'],
  v:['video/raio-x-portuario-tour.mp4','img/raio-x-portuario-t.webp',['Tour de 78 s pelas páginas, com o filtro do Nordeste e as dicas de ferramenta.','78-second tour of the pages, with the Northeast filter and the tooltips.','Recorrido de 78 s por las páginas, con el filtro del Nordeste y la información sobre herramientas.']],
  m:[['rpp-visao-geral',['Visão geral de 2025: cartões, linha mês a mês contra 2024, mapa com a malha do IBGE e as 10 maiores instalações.','2025 overview: cards, month-by-month line against 2024, a map on IBGE\'s boundaries and the 10 largest terminals.','Visión general de 2025: tarjetas, línea mes a mes frente a 2024, mapa con la malla del IBGE y las 10 mayores instalaciones.'],1],
     ['rpp-nordeste-suape',['Suape contra os portos públicos do Nordeste: espera, prancha, crescimento e ranking.','Suape against the Northeast\'s public ports: waiting time, handling rate, growth and ranking.','Suape frente a los puertos públicos del Nordeste: espera, productividad, crecimiento y ranking.'],1],
     ['rpp-eficiencia',['Eficiência e gargalos: espera x prancha, mapa de calor da fila e motivos de paralisação.','Efficiency and bottlenecks: waiting vs handling rate, queue heatmap and stoppage reasons.','Eficiencia y cuellos de botella: espera vs productividad, mapa de calor de la cola y motivos de paralización.'],1],
     ['rpp-perfil-carga',['Perfil de carga: natureza, mercadorias, navegação e sentido, por porto.','Cargo profile: cargo type, goods, navigation and direction, by port.','Perfil de carga: naturaleza, mercancías, navegación y sentido, por puerto.'],1],
     ['rpp-sobre',['Sobre: fonte, método, conferência com a ANTAQ e limitações.','About: source, method, check against ANTAQ and limitations.','Acerca de: fuente, método, verificación con ANTAQ y limitaciones.'],1]],
  li:[['Pipeline em Python e DuckDB sobre o Estatístico Aquaviário da ANTAQ: <b>481 mil atracações e 11,7 milhões de registros de carga</b>, nos anos completos de 2021 a 2025.','O total anual que eu calculo bate com o oficial da ANTAQ com diferença de <b>no máximo 1,16%</b>, conferido em teste automático. Em 2025 também conferi natureza da carga, regiões e os boletins trimestrais.','Suape movimentou <b>698 mil TEU em 2025, 34,6% a mais que em 2021</b>, com a tonelagem estável.','Espera mediana para atracar em Suape de 4,3 h, contra 26,4 h na média dos pares do Nordeste.','Mapa próprio sobre a malha do IBGE, sem depender de login. Modelo e relatório versionados em PBIP (TMDL + PBIR) e validados contra os schemas oficiais.'],
      ['A Python and DuckDB pipeline over ANTAQ\'s Waterway Statistics: <b>481 thousand berthings and 11.7 million cargo records</b>, covering the full years 2021 to 2025.','My annual total matches ANTAQ\'s official figure within <b>1.16% at most</b>, checked by an automated test. For 2025 I also checked cargo types, regions and the quarterly bulletins.','Suape handled <b>698 thousand TEU in 2025, 34.6% more than in 2021</b>, with flat tonnage.','Median wait to berth at Suape was 4.3 h, against 26.4 h on average among its Northeast peers.','A custom map on IBGE\'s boundaries that needs no sign-in. Model and report versioned as PBIP (TMDL + PBIR) and validated against the official schemas.'],
      ['Pipeline en Python y DuckDB sobre el Estadístico Acuaviario de ANTAQ: <b>481 mil atraques y 11,7 millones de registros de carga</b>, en los años completos de 2021 a 2025.','El total anual que calculo coincide con el oficial de ANTAQ con una diferencia de <b>como máximo 1,16%</b>, verificado en una prueba automática. En 2025 también verifiqué naturaleza de la carga, regiones y los boletines trimestrales.','Suape movió <b>698 mil TEU en 2025, un 34,6% más que en 2021</b>, con el tonelaje estable.','Espera mediana para atracar en Suape de 4,3 h, frente a 26,4 h en promedio entre sus pares del Nordeste.','Mapa propio sobre la malla del IBGE, sin depender de inicio de sesión. Modelo e informe versionados en PBIP (TMDL + PBIR) y validados contra los esquemas oficiales.']],
  c:['Power BI','DAX','Power Query','PBIP (TMDL + PBIR)','Python 3.12','DuckDB','pytest',['Dados abertos','Open data','Datos abiertos']],
  a:[[['GitHub','GitHub','GitHub'],'https://github.com/gorc-supply/raio-x-portuario',1],[['PDF','PDF','PDF'],'https://github.com/gorc-supply/raio-x-portuario/blob/main/docs/RaioXPortuario.pdf']]},
 robo:{n:'robo-de-dados',
  q:['O que separa o arquivo do ERP do cliente do sistema: nada entra sem passar pelas regras, e o cliente recebe a lista do que corrigir.','What stands between the client\'s ERP export and the system: nothing gets in without passing the rules, and the client gets a list of what to fix.','Lo que separa el archivo del ERP del cliente del sistema: nada entra sin pasar las reglas, y el cliente recibe la lista de lo que debe corregir.'],
  v:['video/robo-dados-tour.mp4','img/robo-inicio-t.webp',['Tour com uma empresa fictícia: início, visão geral, ocorrências, gráficos e devolutiva.','Tour with a fictional company: home, overview, issues, charts and client report.','Recorrido con una empresa ficticia: inicio, visión general, incidencias, gráficos e informe al cliente.']],
  m:[['robo-visao-geral',['Visão geral da carga: score, registros aprovados, com ressalva e bloqueados, e a dimensão de qualidade mais fraca.','Load overview: score, approved, flagged and blocked records, and the weakest quality dimension.','Visión general de la carga: score, registros aprobados, con salvedad y bloqueados, y la dimensión de calidad más débil.']],
     ['robo-ocorrencias',['Ocorrências com arquivo, linha, regra e severidade, para decidir uma a uma.','Issues with file, row, rule and severity, to decide one by one.','Incidencias con archivo, fila, regla y severidad, para decidir una por una.']],
     ['robo-graficos',['Gráficos por dimensão de qualidade e quantos registros estão prontos para subir.','Charts by quality dimension and how many records are ready to load.','Gráficos por dimensión de calidad y cuántos registros están listos para subir.']],
     ['robo-devolutiva',['Devolutiva ao cliente: o que corrigir no ERP, por área e por arquivo.','Client report: what to fix in the ERP, by area and by file.','Informe al cliente: qué corregir en el ERP, por área y por archivo.']],
     ['robo-regras',['Catálogo de regras: cada uma com fonte, severidade e status. Regra nova nasce desligada até eu validar.','Rule catalog: each with its source, severity and status. A new rule starts switched off until I validate it.','Catálogo de reglas: cada una con fuente, severidad y estado. Una regla nueva nace apagada hasta que yo la valide.']]],
  li:[['Aplicativo desktop que roda offline no computador do analista e lê Excel, CSV e outros formatos que os ERPs de OPME exportam.','<b>86 regras em 12 famílias</b>: estrutura, formato, datas, duplicidade, identificadores, referências, cálculos, texto e estatística (valor fora do padrão do item, dependência entre campos, picos no tempo e mudança entre cargas).','Num teste com erros plantados de propósito, encontrou <b>90 de 90 em 15 segundos</b>. São 234 testes automatizados.','Não corrige o dado por conta própria: sobe ao sistema só o que passou e gera a devolutiva para o cliente corrigir na origem, para a próxima carga já vir certa.','Construído com agentes de IA. As regras que o próprio robô sugere nascem desligadas até eu validar.'],
      ['A desktop app that runs offline on the analyst\'s computer and reads Excel, CSV and the other formats medical-device ERPs export.','<b>86 rules in 12 families</b>: structure, format, dates, duplicates, identifiers, references, calculations, text and statistics (a value out of the item\'s pattern, field dependencies, spikes over time and drift between loads).','In a test with deliberately planted errors it found <b>90 of 90 in 15 seconds</b>. It has 234 automated tests.','It never fixes data on its own: only what passed is loaded, and the client gets a report to fix the source, so the next load comes in clean.','Built with AI coding agents. Rules the robot suggests on its own start switched off until I validate them.'],
      ['Aplicación de escritorio que funciona sin conexión en la computadora del analista y lee Excel, CSV y otros formatos que exportan los ERP de OPME.','<b>86 reglas en 12 familias</b>: estructura, formato, fechas, duplicados, identificadores, referencias, cálculos, texto y estadística (valor fuera del patrón del ítem, dependencia entre campos, picos en el tiempo y cambios entre cargas).','En una prueba con errores plantados a propósito, encontró <b>90 de 90 en 15 segundos</b>. Tiene 234 pruebas automatizadas.','No corrige el dato por su cuenta: sube al sistema solo lo que pasó y genera el informe para que el cliente corrija en el origen y la próxima carga llegue bien.','Construido con agentes de IA. Las reglas que el propio robot sugiere nacen apagadas hasta que yo las valide.']],
  c:['Python','Streamlit','YAML','pytest',['Agentes de IA','AI coding agents','Agentes de IA']],
  a:[],
  note:['Código privado, por fazer parte do Supply OPME. As telas usam uma empresa fictícia.','Private code, as part of Supply OPME. The screens use a fictional company.','Código privado, por ser parte de Supply OPME. Las pantallas usan una empresa ficticia.']},
 kit:{n:'kit-estoque-mrp',
  q:['O comprador sobe a planilha que já exporta do ERP e recebe de volta quanto e quando comprar.','The buyer uploads the spreadsheet already exported from the ERP and gets back how much to buy and when.','El comprador sube la hoja que ya exporta del ERP y recibe cuánto y cuándo comprar.'],
  v:['video/kit-estoque-tour.mp4','img/kit-visao-geral-t.webp',['Tour pelas telas: visão geral, ABC-XYZ, MRP e o passo a passo do cálculo.','Screen tour: overview, ABC-XYZ, MRP and the step-by-step calculation.','Recorrido: visión general, ABC-XYZ, MRP y el cálculo paso a paso.']],
  m:[['kit-visao-geral',['Visão geral com KPIs, status do estoque e entradas contra saídas.','Overview with KPIs, stock status and inflows versus outflows.','Visión general con KPIs, estado del stock y entradas contra salidas.']],
     ['kit-abc-xyz',['Matriz ABC-XYZ clicável e curva de Pareto.','Clickable ABC-XYZ matrix and Pareto curve.','Matriz ABC-XYZ clicable y curva de Pareto.']],
     ['kit-mrp',['Registro de MRP semanal com explosão de BOM, no modo escuro.','Weekly MRP record with BOM explosion, in dark mode.','Registro de MRP semanal con explosión de BOM, en modo oscuro.']],
     ['kit-calculo',['Ver o cálculo: cada número com a fórmula e os valores substituídos.','Show the math: every number with its formula and the values plugged in.','Ver el cálculo: cada número con la fórmula y los valores sustituidos.']],
     ['kit-celular',['Dashboard no celular.','Dashboard on a phone.','Panel en el celular.'],1]],
  li:[['Curva ABC-XYZ, padrão de demanda de Syntetos-Boylan, previsão por média móvel ou SBA com backtest, estoque de segurança, ponto de pedido, lote econômico e <b>MRP semanal com explosão de BOM</b> em vários níveis.','<b>2.000 itens e 100.000 movimentações em cerca de 2,5 s</b>, num Web Worker, sem travar a tela.','14 KPIs, 17 gráficos interativos e uma planilha de saída com 11 abas formatadas.','Tudo roda no navegador: sem servidor, sem banco, sem cookies. A planilha da empresa não sai do computador.','O botão "Ver o cálculo" mostra a fórmula de cada número com os valores substituídos.'],
      ['ABC-XYZ classification, Syntetos-Boylan demand patterns, moving-average or SBA forecasting with backtest, safety stock, reorder point, economic order quantity and <b>weekly MRP with multi-level BOM explosion</b>.','<b>2,000 items and 100,000 movements in about 2.5 s</b>, in a Web Worker, without freezing the screen.','14 KPIs, 17 interactive charts and an output workbook with 11 formatted sheets.','Everything runs in the browser: no server, no database, no cookies. The company\'s spreadsheet never leaves the computer.','The "Show the math" button reveals each number\'s formula with the values plugged in.'],
      ['Curva ABC-XYZ, patrón de demanda de Syntetos-Boylan, pronóstico por media móvil o SBA con backtest, stock de seguridad, punto de pedido, lote económico y <b>MRP semanal con explosión de BOM</b> en varios niveles.','<b>2.000 ítems y 100.000 movimientos en unos 2,5 s</b>, en un Web Worker, sin congelar la pantalla.','14 KPIs, 17 gráficos interactivos y una hoja de salida con 11 pestañas formateadas.','Todo funciona en el navegador: sin servidor, sin base de datos, sin cookies. La hoja de la empresa no sale de la computadora.','El botón "Ver el cálculo" muestra la fórmula de cada número con los valores sustituidos.']],
  c:['React 19','TypeScript','Vite','Tailwind CSS','ECharts','ExcelJS','Vitest','GitHub Pages'],
  a:[[['Testar com dados de exemplo ↗','Try it with sample data ↗','Probar con datos de ejemplo ↗'],'https://gorc-supply.github.io/kit-estoque-mrp/?demo=industria',1],[['Ver código','View code','Ver código'],'https://github.com/gorc-supply/kit-estoque-mrp']]}
};
const LS=['pt','en','es'];
let lang='pt',li=0;
const L=x=>Array.isArray(x)?x[li]:x;
const $=id=>document.getElementById(id);
const md=$('md'),stage=$('stage'),cap=$('cap'),tb=$('tb'),mt=$('mt'),zoom=$('zoom'),lb=$('lb');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce)document.querySelectorAll('.pc video').forEach(v=>{v.removeAttribute('autoplay');v.pause();});
const orig={};document.querySelectorAll('[data-i]').forEach(e=>{orig[e.dataset.i]=e.innerHTML;});
const origTitle=document.title;
let full='',fcap='',last=null,cur=null;
const show=btn=>{
  tb.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===btn));
  stage.querySelectorAll('img,video').forEach(n=>n.remove());
  stage.classList.toggle('ct',btn.dataset.fit==='1');
  cap.textContent=btn.dataset.cap;
  if(btn.dataset.video){
    const v=document.createElement('video');
    Object.assign(v,{src:btn.dataset.video,poster:btn.dataset.poster,muted:true,loop:true,playsInline:true,controls:reduce});
    stage.prepend(v); if(!reduce)v.play().catch(()=>{v.controls=true}); zoom.hidden=true;
  }else{
    const i=document.createElement('img'); i.src=btn.dataset.img; i.alt=btn.dataset.cap; i.style.cursor='zoom-in';
    i.addEventListener('click',()=>openLb(btn.dataset.full,btn.dataset.cap)); stage.prepend(i);
    full=btn.dataset.full; fcap=btn.dataset.cap; zoom.hidden=false;
  }
};
const esc=t=>String(t).replace(/"/g,'&quot;');
const fill=(k,keep)=>{
  const p=P[k];
  const sel=keep?[...tb.querySelectorAll('button')].findIndex(b=>b.getAttribute('aria-pressed')==='true'):0;
  $('mdt').textContent=p.n;
  tb.innerHTML=`<button type="button" data-video="${p.v[0]}" data-poster="${p.v[1]}" data-cap="${esc(L(p.v[2]))}"><img src="${p.v[1]}" alt="${U[lang].video}"><span class="pl">▶</span></button>`+
    p.m.map(([f,c,fit])=>`<button type="button" data-img="img/${f}-t.webp" data-full="img/${f}.webp" data-cap="${esc(L(c))}" data-fit="${fit?1:0}"><img src="img/${f}-t.webp" alt="${esc(L(c))}"></button>`).join('');
  tb.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>show(b)));
  mt.innerHTML=`<p class="q">${L(p.q)}</p><ul>${p.li[li].map(l=>`<li>${l}</li>`).join('')}</ul><div class="chips">${p.c.map(c=>`<span class="chip">${L(c)}</span>`).join('')}</div><div class="acts">${p.a.map(([t,u,g])=>`<a class="b sm${g?' g':''}" href="${u}">${L(t)}</a>`).join('')}</div>${p.note?`<p class="note">${L(p.note)}</p>`:''}`;
  show(tb.querySelectorAll('button')[Math.max(sel,0)]);
};
const open=(k,from)=>{
  last=from; cur=k; fill(k,false);
  md.classList.add('on'); md.scrollTop=0; document.body.style.overflow='hidden'; $('mdx').focus();
};
const close=()=>{md.classList.remove('on');cur=null;stage.querySelectorAll('video').forEach(v=>v.pause());document.body.style.overflow='';if(last&&document.contains(last))last.focus();};
const openLb=(src,c)=>{$('lbi').src=src;$('lbc').textContent=c;lb.classList.add('on');$('lbx').focus();};
const closeLb=()=>{lb.classList.remove('on');$('mdx').focus();};
document.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)open(b.dataset.open,b);});
$('mdx').addEventListener('click',close);
md.addEventListener('click',e=>{if(e.target===md)close();});
zoom.addEventListener('click',()=>openLb(full,fcap));
$('lbx').addEventListener('click',closeLb);
addEventListener('keydown',e=>{if(e.key!=='Escape')return; if(lb.classList.contains('on'))closeLb(); else if(md.classList.contains('on'))close();});
const cp=$('copy');
if(cp)cp.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(cp.dataset.mail);cp.textContent=U[lang].copied;}catch(e){cp.textContent=cp.dataset.mail;}setTimeout(()=>cp.textContent=U[lang].copy,2400);});
const setLang=l=>{
  if(!LS.includes(l))l='pt';
  lang=l; li=LS.indexOf(l);
  document.documentElement.lang=l==='pt'?'pt-BR':l;
  document.querySelectorAll('[data-i]').forEach(e=>{const k=e.dataset.i;e.innerHTML=l==='pt'?orig[k]:(T[l][k]??orig[k]);});
  document.title=l==='pt'?origTitle:(T[l]['tt_'+PG]||T[l].title);
  document.querySelectorAll('a[data-story]').forEach(a=>a.setAttribute('href','stories/'+a.dataset.story+(l==='en'?'':'.'+l)+'.html'));
  document.querySelectorAll('a[data-pg]').forEach(a=>{const[p,h]=a.dataset.pg.split('#');a.setAttribute('href',p+(l==='pt'?'':'?lang='+l)+(h?'#'+h:''));});
  document.querySelectorAll('a[href^="curriculo"]').forEach(a=>a.setAttribute('href',l==='pt'?'curriculo.html':'curriculo-en.html'));
  if(cp)cp.textContent=U[l].copy;
  document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===l));
  document.querySelector('.lang').setAttribute('aria-label',U[l].group);
  if(cur)fill(cur,true);
  try{localStorage.setItem('lang',l);}catch(e){}
};
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.l)));
let start='pt';
try{
  const q=new URLSearchParams(location.search).get('lang');
  const saved=localStorage.getItem('lang');
  const nav=(navigator.language||'').slice(0,2).toLowerCase();
  start=LS.includes(q)?q:LS.includes(saved)?saved:(nav==='en'||nav==='es')?nav:'pt';
}catch(e){}
if(start!=='pt')setLang(start);
}

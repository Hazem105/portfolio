/* data.js — الملف الوحيد اللي بتعدّل فيه محتوى الموقع.
   كل نص له نسختين: en إنجليزي وar عربي. */
window.SITE = {
  name: { en: "Hazem Ali", ar: "حازم على" },
  role: { en: "Data Analyst & BI Specialist", ar: "محلل بيانات وأخصائي ذكاء أعمال" },
  headline: {
    en: "I turn raw data into decisions people can act on.",
    ar: "بحوّل البيانات الخام لقرارات تتنفّذ."
  },
  about: {
    en: [
      "I'm a data analyst working with SQL, Python, Excel and Power BI. I clean messy data, find what drives the numbers, and present it in dashboards that decision makers can read in a minute.",
      "Below are projects I built end to end, each with the question, the method and the result."
    ],
    ar: [
      "أنا محلل بيانات بشتغل بـ SQL وPython وExcel وPower BI. بنضّف البيانات، وبلاقي إيه اللي بيحرّك الأرقام، وبعرضها في داشبوردات تتقري في دقيقة.",
      "تحت هتلاقي مشاريع عملتها من الأول للآخر، وكل مشروع فيه السؤال والطريقة والنتيجة."
    ]
  },
  tools: [
    { name: "SQL",      use: { en: "Joins, aggregations, window functions", ar: "Joins وتجميعات وWindow functions" } },
    { name: "Python",   use: { en: "Cleaning, analysis, visualization",     ar: "تنضيف وتحليل ورسم بياني" } },
    { name: "Excel",    use: { en: "Pivot tables, dashboards, KPIs",        ar: "Pivot tables وداشبوردات وKPIs" } },
    { name: "Power BI", use: { en: "Data models, DAX, interactive reports", ar: "نماذج بيانات وDAX وتقارير تفاعلية" } }
  ],
  projects: [
     {
  tool: "Excel",
  title: { en: "Apocalypse Store Sales Analytics", ar: "تحليل مبيعات متجر مستلزمات النجاة" },
  summary: {
    en: "Sales analytics for a survival and disaster-preparedness store: 10 products and 74 orders (3,001 units) from January to mid-March 2022. Linked products to sales with XLOOKUP, then calculated revenue, cost, gross profit and gross margin. Revenue reached $87,945.09 with $43,212.43 gross profit (49.1% margin). Weatherproof Jacket was the top product by revenue and profit, January was the strongest month, and all data quality checks passed.",
    ar: "تحليل مبيعات لمتجر مستلزمات النجاة والاستعداد للكوارث: 10 منتجات و74 طلب (3,001 وحدة) من يناير لحد منتصف مارس 2022. ربطت المنتجات بالمبيعات بـ XLOOKUP وحسبت الإيراد والتكلفة والربح الإجمالي وهامش الربح. الإيراد وصل $87,945.09 وبربح إجمالي $43,212.43 (هامش 49.1%). Weatherproof Jacket كان أفضل منتج في الإيراد والربح، ويناير كان أقوى شهر، وكل فحوصات جودة البيانات نجحت."
  },
  tags: ["XLOOKUP", "Gross margin", "Sales analytics"],
  image: "apocalypse-store-img.png",
  github: "https://github.com/Hazem105/portfolio/blob/main/apocalypse-store.xlsx",
  live: ""
},
     {
  tool: "Excel",
  title: { en: "Glow & Go Salon Marketing Dashboard", ar: "داشبورد تسويق Glow & Go Salon" },
  summary: {
    en: "Analysed marketing and sales data and built an Excel dashboard of PivotCharts comparing revenue, profit and ad spend across five marketing channels, and revenue, profit and conversions for new versus returning customers. Google Ads delivered the highest profit (22% of the total), and returning customers brought in more revenue and profit than new ones.",
    ar: "حللت بيانات التسويق والمبيعات وعملت داشبورد في Excel من PivotCharts بتقارن الإيراد والربح والإنفاق الإعلاني بين خمس قنوات تسويق، والإيراد والربح والتحويلات بين العملاء الجداد والراجعين. Google Ads جابت أعلى ربح (22% من الإجمالي)، والعملاء الراجعين جابوا إيراد وربح أكتر من الجداد."
  },
  tags: ["PivotCharts", "Marketing channels", "Customer type", "Dashboard"],
   image: "Glow-%26-Go-Salon-img.png",
  github: "https://github.com/Hazem105/portfolio/blob/main/Glow-%26-Go-Salon.xlsx",
  live: ""
},
     {
  tool: "Excel",
  title: { en: "FixGo Revenue and Conversions Dashboard", ar: "داشبورد إيرادات وتحويلات FixGo" },
  summary: {
    en: "Analysed the FixGo dataset and built a dashboard showing revenue by client type, and monthly revenue alongside conversions.",
    ar: "حللت بيانات FixGo وعملت داشبورد بيعرض الإيراد حسب نوع العميل، والإيراد الشهري جنب التحويلات (Conversions)."
  },
  tags: ["Dashboard", "Revenue analysis", "Conversions"],
  image: "fixgo-img.png",
  github: "https://github.com/Hazem105/portfolio/blob/main/fixgo.xlsx",
  live: ""
},
     {
  tool: "Excel",
  title: { en: "Brew Bliss Cafe Analysis", ar: "تحليل بيانات Brew Bliss Cafe" },
  summary: {
    en: "Analysed revenue, marketing channels and customer behavior for Brew Bliss Cafe. Premium services generated the highest revenue, and some marketing channels outperformed others, which points to where marketing and service focus can improve.",
    ar: "حللت الإيرادات وقنوات التسويق وسلوك العملاء لكافيه Brew Bliss Cafe. الخدمات المميزة (Premium) جابت أعلى إيراد، وبعض قنوات التسويق كان أداؤها أفضل من غيرها، وده بيوضح فين ممكن نحسّن التسويق وتركيز الخدمات."
  },
  tags: ["Revenue analysis", "Marketing channels", "Customer behavior"],
  image: "brew-bliss-cafe-img.png",
  github: "https://github.com/Hazem105/portfolio/blob/main/brew-bliss-cafe.xlsx",
  live: ""
},
     {
  tool: "Excel",
  title: { en: "Sales Performance Dashboard", ar: "داشبورد أداء المبيعات" },
  summary: {
    en: "Built a sales dashboard in Excel from a table of 2,000 orders: 9 PivotTables, a PivotChart for each, and 10 KPI formulas. Total sales reached 11.83M; Assiut was the top region (2.53M, 21.4%), Monitor the top product, Sara the top sales rep, and March the best month.",
    ar: "عملت داشبورد مبيعات في Excel من جدول فيه 2,000 أوردر: 9 PivotTables ورسمة PivotChart لكل واحد، و10 مؤشرات أداء بمعادلات. إجمالي المبيعات وصل 11.83M، وأعلى منطقة Assiut (2.53M بنسبة 21.4%)، وأعلى منتج Monitor، وأفضل مندوب Sara، وأفضل شهر مارس."
  },
  tags: ["PivotTables", "PivotCharts", "KPIs", "Dashboard"],
  image: "sales-performence-img.png",
  github: "https://github.com/Hazem105/portfolio/blob/main/sales%20performance.xlsx",
  live: ""
},
     {
  tool: "Power BI",
  title: { en: "HR Performence", ar: "أداء الموارد البشرية" },
  summary: {
    en: "Cleaned a broken dataset with Power Query, built pivot tables, pivot charts and a dashboard in Excel, then loaded the data into Power BI, verified it again in Power Query, and built a Power BI dashboard.",
    ar: "نضفت بيانات بايظة بـ Power Query، وعملت منها Pivot tables وPivot charts وداشبورد في Excel، وبعدين دخلت البيانات على Power BI وراجعتها تاني في Power Query وعملت داشبورد في Power BI."
  },
  tags: ["Power Query", "Power BI", "Pivot tables", "Dashboard"],
  image: "hr-performence-img.jpg",
  github: "https://github.com/Hazem105/portfolio/blob/main/hr-performence.pbix",
  live: ""
},
     {
  tool: "Excel",
  title: { en: "Sales vs Target and YoY Analysis", ar: "تحليل المبيعات مقابل التارجت والنمو السنوي" },
  summary: {
    en: "Linked the data tables in Excel's Power Pivot data model and wrote DAX measures for total target, achievement %, sales ignoring the region filter, sales for the same period last year, and year-over-year difference and growth %.",
    ar: "ربطت جداول البيانات في Power Pivot جوه Excel وكتبت معادلات DAX للتارجت الكلي ونسبة التحقيق، والمبيعات من غير فلتر المنطقة، ومبيعات نفس الفترة السنة اللي فاتت، والفرق ونسبة النمو السنوي."
  },
  tags: ["Power Pivot", "DAX", "Data model", "YoY"],
  image: "power-pivot-img.png",
  github: "https://github.com/Hazem105/portfolio/blob/main/power-pivot.xlsx",
  live: ""
},
    {
      tool: "Excel",
      title: { en: "Sales Dashboard", ar: "داشبورد المبيعات" },
      summary: {
        en: "Cleaned and prepared a sales dataset, built pivot tables and pivot charts from it, and combined them into a sales dashboard.",
        ar: "نضفت بيانات مبيعات وجهزتها، وعملت منها Pivot tables وPivot charts، وجمعتهم في داشبورد للمبيعات."
      },
      tags: ["Pivot tables", "Pivot charts", "Dashboard"],
image: "sales-dashboard-img.png", github: "https://github.com/Hazem105/portfolio/blob/main/sales-dashboard.xlsx", live: ""    },
    {
      tool: "Excel",
      title: { en: "Sales Data Cleaning", ar: "تنظيف بيانات المبيعات" },
      summary: {
        en: "Took a broken sales export with 21 fields (orders, dates, shipping, customers, regions, products, sales, quantity, discount and profit) and cleaned it with Power Query in Excel into a consistent, analysis-ready table.",
        ar: "أخدت ملف مبيعات بايظ فيه 21 عمود (طلبات وتواريخ وشحن وعملاء ومناطق ومنتجات ومبيعات وكمية وخصم وربح) ونضفته بـ Power Query في Excel لحد ما بقى جدول متناسق وجاهز للتحليل."
      },
      tags: ["Power Query", "Data cleaning"],
      image: "sales-cleaning.png.png",
      github: "https://github.com/Hazem105/portfolio/blob/main/sales-data-cleaning.xlsx.xlsx",
      live: ""
    },
    {
      tool: "Power BI",
      title: { en: "Your Power BI project title", ar: "اسم مشروع Power BI" },
      summary: { en: "One or two sentences: the question, the data, the main finding.", ar: "جملة أو اتنين: السؤال والبيانات وأهم نتيجة." },
      tags: ["DAX", "Data model"],
      image: "", github: "", live: ""
    },
    {
      tool: "Python",
      title: { en: "Your Python project title", ar: "اسم مشروع Python" },
      summary: { en: "One or two sentences: the question, the data, the main finding.", ar: "جملة أو اتنين: السؤال والبيانات وأهم نتيجة." },
      tags: ["pandas", "Matplotlib"],
      image: "", github: "", live: ""
    },
    {
      tool: "SQL",
      title: { en: "Your SQL project title", ar: "اسم مشروع SQL" },
      summary: { en: "One or two sentences: the question, the data, the main finding.", ar: "جملة أو اتنين: السؤال والبيانات وأهم نتيجة." },
      tags: ["Window functions", "CTEs"],
      image: "", github: "", live: ""
    }
  ],
  contact: { email: "ha9158392@gmail.com", github: "https://github.com/Hazem105", linkedin: "", whatsapp: "201554954513" }
};

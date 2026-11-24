/* ============================================================
   data.js — الملف الوحيد اللي بتعدّل فيه محتوى الموقع
   Edit only this file to change your name, bio, projects, links.
   Each text has two versions: en (English) and ar (Arabic).
   ============================================================ */
window.SITE = {
  name: { en: "Hazem Ali", ar: " حازم على" },              // ضيف اسمك الكامل هنا
  role: { en: "Data Analyst & BI Specialist", ar: " محلل بيانات وأخصائي ذكاء أعمال" },
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
  /* tool لازم يكون واحد من: SQL / Python / Excel / Power BI
     image: مسار صورة (مثلاً "img/sales.png") أو سيبه فاضي
     github / live: لينكات، سيبهم "" لو مش موجودين */
  projects: [
     {
  tool: "Excel",
  title: { en: "Sales Data Cleaning", ar: "تنظيف بيانات المبيعات" },
  summary: {
    en: "Took a broken sales file and cleaned it with Power Query in Excel into a tidy, consistent table ready for analysis.",
    ar: "أخدت ملف مبيعات بايظ ونضفته بـ Power Query في Excel لحد ما بقى جدول نضيف ومتناسق جاهز للتحليل."
  },
  tags: ["Power Query", "Data cleaning"],
 image: "", github: "https://github.com/اسم-حسابك/portfolio/blob/main/sales-data-cleaning.xlsx", live: ""
},
    {
      tool: "Excel",
      title: { en: "Sales Performance Dashboard", ar: "داشبورد أداء المبيعات" },
      summary: {
        en: "2,000 orders analysed with 9 pivot tables and a KPI dashboard covering sales, profit and regional performance.",
        ar: "تحليل 2,000 طلب بـ 9 Pivot tables وداشبورد مؤشرات أداء للمبيعات والربح والأداء حسب المنطقة."
      },
      tags: ["Pivot tables", "KPIs", "Charts"],
      image: "", github: "", live: ""
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
  /* سيب أي لينك فاضي "" ومش هيظهر */
  contact: { email: "ha9158392@gmail.com", github: "https://github.com/", linkedin: "", whatsapp: "201554954513" }
};

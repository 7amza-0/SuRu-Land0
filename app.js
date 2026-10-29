/* Suru Land — an Islamic nursery app (web MVP)
   All data lives in localStorage on this device. */
(function () {
  "use strict";

  var KEY = "suru-land-data-v1";
  var FEE = 4750;

  var LOCALE = { en: "en", ar: "ar", fr: "fr", ru: "ru" };
  var LANG_LABEL = { en: "English", ar: "العربية", fr: "Français", ru: "Русский" };

  var WEEK_FULL = {
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    fr: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    ru: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    ar: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  };
  var WEEK_SHORT = {
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    fr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    ar: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  };

  var I18N = {
    en: {
      greeting: "As-salāmu ʿalaykum wa raḥmatullāh",
      tagline: "An Islamic nursery — Qur’ān, Arabic and good character for our families",
      chooseLang: "Choose your language",
      roleQ: "Who are you?",
      roleParent: "I’m a Parent",
      roleOwner: "Owner & Staff",
      parentArea: "Parent area",
      chooseChild: "Choose your child",
      noChildren: "No children yet. Register your child below.",
      registerNewChild: "Register a new child",
      back: "Back", home: "Home", today: "Today",
      fees: "Fees", term: "Term", amountDue: "Amount due", paid: "Paid", balance: "Balance",
      howToPay: "How to pay", weeklyLessons: "Weekly lessons", newsCard: "News",
      noNews: "No announcements yet", noFees: "No fees yet.",
      newReg: "New registration",
      childName: "Child’s name", dob: "Date of birth",
      idSection: "ID document", idType: "Document type",
      passport: "Passport", birthCert: "Birth certificate", nationalId: "National ID", other: "Other",
      idNumber: "Document number", uploadPhoto: "Upload a picture", photoChosen: "Picture attached",
      familySection: "Family (optional)", familyName: "Family name",
      parents: "Parents", mother: "Mother", father: "Father",
      name: "Name", phone: "Phone", email: "Email",
      parentHint: "At least one parent is required.",
      emergency: "Emergency contacts",
      emergencyHint: "At least one contact is required.",
      addContact: "Add another contact",
      pickup: "Pickup people (optional)",
      pickupHint: "People allowed to collect your child.",
      addPickup: "Add another person",
      prefLang: "Preferred contact language",
      submit: "Send registration",
      childNeeded: "Please enter the child’s name and date of birth.",
      idNeeded: "Enter the document number or upload a picture.",
      parentNeeded: "Please add at least one parent.",
      emergencyNeeded: "Please add at least one emergency contact.",
      confirmTitle: "JazākumuLlāhu khayran!",
      confirmBody: "We have received your registration and the nursery will contact you soon, in shāʾ Allāh.",
      pendingReview: "Pending review", done: "Back to start",
      approved: "Approved", rejected: "Rejected",
      ownerArea: "Owner & Staff area",
      email: "Email", password: "Password",
      signIn: "Sign in", guest: "Continue without signing in",
      fillBoth: "Please enter your email and password.",
      loginHint: "Local demo: any email and password will open this area on this device.",
      tabFamilies: "Families", tabFees: "Fees", tabLessons: "Lessons", tabNews: "News", tabData: "Data",
      signOut: "Sign out",
      children: "Children", approve: "Approve", reject: "Reject", open: "Open",
      noFamilies: "No families yet.",
      familyDetail: "Family", contacts: "Emergency contacts", pickupPeople: "Pickup people",
      languageLabel: "Preferred language", idDoc: "ID document",
      feeNote: "Fee: 4,750 EGP per term.",
      addTerm: "Add a term", termName: "Term name (e.g. Term 1)",
      termNameNeeded: "Please enter a term name.",
      invoices: "Invoices", addPayment: "Add payment",
      amount: "Amount", date: "Date", method: "Method",
      cash: "Cash", instapay: "InstaPay", vodafone: "Vodafone Cash", bank: "Bank transfer", card: "Card",
      statusPaid: "Paid in full", statusPart: "Part paid", statusUnpaid: "Unpaid",
      noTerms: "No terms yet. Add a term to create invoices.",
      amountNeeded: "Please enter an amount.",
      delTermWarn: "Delete this term and its invoices?",
      delPayWarn: "Remove this payment?",
      lessons: "Lessons", lesson: "Lesson", teacher: "Teacher", time: "Time", day: "Day",
      save: "Save", cancel: "Cancel", delete: "Delete",
      addLesson: "Add lesson", editLesson: "Edit lesson",
      lessonNeeded: "Please enter the lesson and the teacher.",
      delLessonWarn: "Delete this lesson?",
      postTitle: "Title", postMessage: "Message", post: "Post announcement",
      newsNeeded: "Please enter a title and a message.",
      delNewsWarn: "Delete this announcement?",
      dataNote: "Your data is stored only on this device and browser — nothing is sent to the internet.",
      exportBackup: "Export backup (JSON)", importBackup: "Import backup",
      importWarn: "Importing replaces everything stored here with the backup file. Continue?",
      importOk: "Backup imported.", importBad: "That file is not a valid Suru Land backup."
    },
    fr: {
      greeting: "As-salamou aleykoum wa rahmatoullah",
      tagline: "Une crèche islamique — Coran, arabe et bon caractère pour nos familles",
      chooseLang: "Choisissez votre langue",
      roleQ: "Qui êtes-vous ?",
      roleParent: "Je suis parent",
      roleOwner: "Propriétaire & équipe",
      parentArea: "Espace parents",
      chooseChild: "Choisissez votre enfant",
      noChildren: "Aucun enfant pour l’instant. Inscrivez votre enfant ci-dessous.",
      registerNewChild: "Inscrire un nouvel enfant",
      back: "Retour", home: "Accueil", today: "Aujourd’hui",
      fees: "Frais", term: "Trimestre", amountDue: "Montant dû", paid: "Payé", balance: "Solde",
      howToPay: "Comment payer", weeklyLessons: "Leçons de la semaine", newsCard: "Actualités",
      noNews: "Pas d’annonces pour le moment", noFees: "Pas de frais pour le moment.",
      newReg: "Nouvelle inscription",
      childName: "Nom de l’enfant", dob: "Date de naissance",
      idSection: "Document d’identité", idType: "Type de document",
      passport: "Passeport", birthCert: "Acte de naissance", nationalId: "Carte d’identité", other: "Autre",
      idNumber: "Numéro du document", uploadPhoto: "Ajouter une photo", photoChosen: "Photo jointe",
      familySection: "Famille (facultatif)", familyName: "Nom de famille",
      parents: "Parents", mother: "Mère", father: "Père",
      name: "Nom", phone: "Téléphone", email: "E-mail",
      parentHint: "Au moins un parent est requis.",
      emergency: "Contacts d’urgence",
      emergencyHint: "Au moins un contact est requis.",
      addContact: "Ajouter un contact",
      pickup: "Personnes habilitées à récupérer l’enfant (facultatif)",
      pickupHint: "Personnes autorisées à venir chercher votre enfant.",
      addPickup: "Ajouter une personne",
      prefLang: "Langue de contact préférée",
      submit: "Envoyer l’inscription",
      childNeeded: "Veuillez saisir le nom de l’enfant et sa date de naissance.",
      idNeeded: "Saisissez le numéro du document ou ajoutez une photo.",
      parentNeeded: "Veuillez ajouter au moins un parent.",
      emergencyNeeded: "Veuillez ajouter au moins un contact d’urgence.",
      confirmTitle: "JazākumuLlāhu khayran !",
      confirmBody: "Nous avons bien reçu votre inscription. La crèche vous contactera bientôt, in shāʾ Allāh.",
      pendingReview: "En attente de validation", done: "Retour à l’accueil",
      approved: "Validée", rejected: "Refusée",
      ownerArea: "Espace propriétaire & équipe",
      email: "E-mail", password: "Mot de passe",
      signIn: "Se connecter", guest: "Continuer sans se connecter",
      fillBoth: "Veuillez saisir votre e-mail et votre mot de passe.",
      loginHint: "Démo locale : n’importe quel e-mail et mot de passe ouvrent cet espace sur cet appareil.",
      tabFamilies: "Familles", tabFees: "Frais", tabLessons: "Leçons", tabNews: "Actualités", tabData: "Données",
      signOut: "Se déconnecter",
      children: "Enfants", approve: "Valider", reject: "Refuser", open: "Ouvrir",
      noFamilies: "Aucune famille pour l’instant.",
      familyDetail: "Famille", contacts: "Contacts d’urgence", pickupPeople: "Personnes habilitées",
      languageLabel: "Langue préférée", idDoc: "Document d’identité",
      feeNote: "Frais : 4 750 EGP par trimestre.",
      addTerm: "Ajouter un trimestre", termName: "Nom du trimestre (ex. Trimestre 1)",
      termNameNeeded: "Veuillez saisir un nom.",
      invoices: "Factures", addPayment: "Ajouter un paiement",
      amount: "Montant", date: "Date", method: "Moyen",
      cash: "Espèces", instapay: "InstaPay", vodafone: "Vodafone Cash", bank: "Virement bancaire", card: "Carte",
      statusPaid: "Payé en totalité", statusPart: "Partiellement payé", statusUnpaid: "Non payé",
      noTerms: "Aucun trimestre. Ajoutez-en un pour créer les factures.",
      amountNeeded: "Veuillez saisir un montant.",
      delTermWarn: "Supprimer ce trimestre et ses factures ?",
      delPayWarn: "Supprimer ce paiement ?",
      lessons: "Leçons", lesson: "Leçon", teacher: "Enseignant", time: "Heure", day: "Jour",
      save: "Enregistrer", cancel: "Annuler", delete: "Supprimer",
      addLesson: "Ajouter une leçon", editLesson: "Modifier la leçon",
      lessonNeeded: "Veuillez saisir la leçon et l’enseignant.",
      delLessonWarn: "Supprimer cette leçon ?",
      postTitle: "Titre", postMessage: "Message", post: "Publier",
      newsNeeded: "Veuillez saisir un titre et un message.",
      delNewsWarn: "Supprimer cette annonce ?",
      dataNote: "Vos données sont enregistrées uniquement sur cet appareil et ce navigateur — rien n’est envoyé sur Internet.",
      exportBackup: "Exporter une sauvegarde (JSON)", importBackup: "Importer une sauvegarde",
      importWarn: "L’importation remplace toutes les données ici par le fichier de sauvegarde. Continuer ?",
      importOk: "Sauvegarde importée.", importBad: "Ce fichier n’est pas une sauvegarde Suru Land valide."
    },
    ru: {
      greeting: "Ас-саляму алейкум ва рахматуллахи ва баракятух",
      tagline: "Исламский детский сад — Коран, арабский язык и хороший нрав для наших семей",
      chooseLang: "Выберите язык",
      roleQ: "Кто вы?",
      roleParent: "Я родитель",
      roleOwner: "Владелец и персонал",
      parentArea: "Для родителей",
      chooseChild: "Выберите вашего ребёнка",
      noChildren: "Пока нет детей. Зарегистрируйте ребёнка ниже.",
      registerNewChild: "Зарегистрировать ребёнка",
      back: "Назад", home: "Главная", today: "Сегодня",
      fees: "Оплата", term: "Термин", amountDue: "К оплате", paid: "Оплачено", balance: "Остаток",
      howToPay: "Как оплатить", weeklyLessons: "Занятия на неделю", newsCard: "Новости",
      noNews: "Пока нет объявлений", noFees: "Пока нет оплат.",
      newReg: "Новая заявка",
      childName: "Имя ребёнка", dob: "Дата рождения",
      idSection: "Документ", idType: "Тип документа",
      passport: "Паспорт", birthCert: "Свидетельство о рождении", nationalId: "Удостоверение личности", other: "Другое",
      idNumber: "Номер документа", uploadPhoto: "Загрузить фото", photoChosen: "Фото прикреплено",
      familySection: "Семья (необязательно)", familyName: "Фамилия",
      parents: "Родители", mother: "Мама", father: "Папа",
      name: "Имя", phone: "Телефон", email: "Эл. почта",
      parentHint: "Необходим хотя бы один родитель.",
      emergency: "Экстренные контакты",
      emergencyHint: "Необходим хотя бы один контакт.",
      addContact: "Добавить контакт",
      pickup: "Кто может забирать ребёнка (необязательно)",
      pickupHint: "Люди, которым разрешено забирать вашего ребёнка.",
      addPickup: "Добавить человека",
      prefLang: "Язык для связи",
      submit: "Отправить заявку",
      childNeeded: "Введите имя ребёнка и дату рождения.",
      idNeeded: "Введите номер документа или загрузите фото.",
      parentNeeded: "Добавьте хотя бы одного родителя.",
      emergencyNeeded: "Добавьте хотя бы один экстренный контакт.",
      confirmTitle: "JazākumuLlāhu khayran!",
      confirmBody: "Мы получили вашу заявку. Сад скоро свяжется с вами, ин шаа Аллах.",
      pendingReview: "На рассмотрении", done: "На главную",
      approved: "Одобрено", rejected: "Отклонено",
      ownerArea: "Зона владельца и персонала",
      email: "Эл. почта", password: "Пароль",
      signIn: "Войти", guest: "Продолжить без входа",
      fillBoth: "Введите эл. почту и пароль.",
      loginHint: "Локальная демо-версия: любой адрес и пароль открывают эту зону на этом устройстве.",
      tabFamilies: "Семьи", tabFees: "Оплата", tabLessons: "Занятия", tabNews: "Новости", tabData: "Данные",
      signOut: "Выйти",
      children: "Дети", approve: "Одобрить", reject: "Отклонить", open: "Открыть",
      noFamilies: "Пока нет семей.",
      familyDetail: "Семья", contacts: "Экстренные контакты", pickupPeople: "Кто забирает ребёнка",
      languageLabel: "Предпочтительный язык", idDoc: "Документ",
      feeNote: "Оплата: 4 750 EGP за термин.",
      addTerm: "Добавить термин", termName: "Название (напр. Термин 1)",
      termNameNeeded: "Введите название.",
      invoices: "Счета", addPayment: "Добавить платёж",
      amount: "Сумма", date: "Дата", method: "Способ",
      cash: "Наличные", instapay: "InstaPay", vodafone: "Vodafone Cash", bank: "Банковский перевод", card: "Карта",
      statusPaid: "Оплачено полностью", statusPart: "Частично оплачено", statusUnpaid: "Не оплачено",
      noTerms: "Пока нет терминов. Добавьте термин, чтобы создать счета.",
      amountNeeded: "Введите сумму.",
      delTermWarn: "Удалить этот термин и его счета?",
      delPayWarn: "Удалить этот платёж?",
      lessons: "Занятия", lesson: "Занятие", teacher: "Учитель", time: "Время", day: "День",
      save: "Сохранить", cancel: "Отмена", delete: "Удалить",
      addLesson: "Добавить занятие", editLesson: "Изменить занятие",
      lessonNeeded: "Введите занятие и учителя.",
      delLessonWarn: "Удалить это занятие?",
      postTitle: "Заголовок", postMessage: "Сообщение", post: "Опубликовать",
      newsNeeded: "Введите заголовок и сообщение.",
      delNewsWarn: "Удалить это объявление?",
      dataNote: "Данные хранятся только на этом устройстве и в этом браузере — ничего не отправляется в интернет.",
      exportBackup: "Экспорт резервной копии (JSON)", importBackup: "Импорт резервной копии",
      importWarn: "Импорт заменит все данные здесь файлом резервной копии. Продолжить?",
      importOk: "Резервная копия импортирована.", importBad: "Это не резервная копия Suru Land."
    },
    ar: {
      greeting: "السلام عليكم ورحمة الله وبركاته",
      tagline: "حضانة إسلامية — قرآن وعربية وحسن الخلق لأسرنا",
      chooseLang: "اختر لغتك",
      roleQ: "من أنت؟",
      roleParent: "أنا ولي أمر",
      roleOwner: "المالكة والطاقم",
      parentArea: "منطقة أولياء الأمور",
      chooseChild: "اختر طفلك",
      noChildren: "لا يوجد أطفال بعد. سجّل طفلك بالأسفل.",
      registerNewChild: "تسجيل طفل جديد",
      back: "رجوع", home: "الرئيسية", today: "اليوم",
      fees: "الرسوم", term: "الفصل", amountDue: "المبلغ المستحق", paid: "المدفوع", balance: "المتبقي",
      howToPay: "طرق الدفع", weeklyLessons: "جدول الدروس الأسبوعي", newsCard: "الأخبار",
      noNews: "لا إعلانات بعد", noFees: "لا رسوم بعد.",
      newReg: "تسجيل جديد",
      childName: "اسم الطفل", dob: "تاريخ الميلاد",
      idSection: "وثيقة الهوية", idType: "نوع الوثيقة",
      passport: "جواز سفر", birthCert: "شهادة ميلاد", nationalId: "بطاقة هوية", other: "أخرى",
      idNumber: "رقم الوثيقة", uploadPhoto: "ارفع صورة", photoChosen: "تم إرفاق صورة",
      familySection: "العائلة (اختياري)", familyName: "اسم العائلة",
      parents: "الوالدان", mother: "الأم", father: "الأب",
      name: "الاسم", phone: "الهاتف", email: "البريد الإلكتروني",
      parentHint: "مطلوب أحد الوالدين على الأقل.",
      emergency: "أرقام الطوارئ",
      emergencyHint: "مطلوب جهة اتصال واحدة على الأقل.",
      addContact: "إضافة جهة اتصال",
      pickup: "من يُسمح لهم بالاصطحاب (اختياري)",
      pickupHint: "الأشخاص المسموح لهم بأخذ طفلك.",
      addPickup: "إضافة شخص",
      prefLang: "لغة التواصل المفضلة",
      submit: "إرسال التسجيل",
      childNeeded: "أدخل اسم الطفل وتاريخ ميلاده.",
      idNeeded: "أدخل رقم الوثيقة أو ارفع صورة.",
      parentNeeded: "أضف أحد الوالدين على الأقل.",
      emergencyNeeded: "أضف جهة اتصال واحدة على الأقل.",
      confirmTitle: "جزاكم الله خيرًا!",
      confirmBody: "لقد استلمنا تسجيلكم وستتواصل معكم الحضانة قريبًا إن شاء الله.",
      pendingReview: "في انتظار المراجعة", done: "العودة للبداية",
      approved: "مقبول", rejected: "مرفوض",
      ownerArea: "منطقة المالكة والطاقم",
      email: "البريد الإلكتروني", password: "كلمة السر",
      signIn: "تسجيل الدخول", guest: "الدخول بدون تسجيل",
      fillBoth: "أدخل البريد وكلمة السر.",
      loginHint: "نسخة تجريبية محلية: أي بريد وكلمة سر يفتحان هذه المنطقة على هذا الجهاز.",
      tabFamilies: "الأسر", tabFees: "الرسوم", tabLessons: "الدروس", tabNews: "الأخبار", tabData: "البيانات",
      signOut: "خروج",
      children: "الأطفال", approve: "قبول", reject: "رفض", open: "فتح",
      noFamilies: "لا أسر بعد.",
      familyDetail: "العائلة", contacts: "أرقام الطوارئ", pickupPeople: "من يصطحب الطفل",
      languageLabel: "اللغة المفضلة", idDoc: "وثيقة الهوية",
      feeNote: "الرسوم: 4750 جنيه لكل فصل.",
      addTerm: "إضافة فصل", termName: "اسم الفصل (مثال: الفصل الأول)",
      termNameNeeded: "أدخل الاسم.",
      invoices: "الفواتير", addPayment: "إضافة دفعة",
      amount: "المبلغ", date: "التاريخ", method: "الطريقة",
      cash: "نقدًا", instapay: "إنستاباي", vodafone: "فودافون كاش", bank: "تحويل بنكي", card: "بطاقة",
      statusPaid: "مسدد بالكامل", statusPart: "مسدد جزئيًا", statusUnpaid: "غير مسدد",
      noTerms: "لا فصول بعد. أضف فصلًا لإنشاء الفواتير.",
      amountNeeded: "أدخل المبلغ.",
      delTermWarn: "حذف هذا الفصل وفواتيره؟",
      delPayWarn: "حذف هذه الدفعة؟",
      lessons: "الدروس", lesson: "الدرس", teacher: "المعلم", time: "الوقت", day: "اليوم",
      save: "حفظ", cancel: "إلغاء", delete: "حذف",
      addLesson: "إضافة درس", editLesson: "تعديل الدرس",
      lessonNeeded: "أدخل الدرس والمعلم.",
      delLessonWarn: "حذف هذا الدرس؟",
      postTitle: "العنوان", postMessage: "الرسالة", post: "نشر الإعلان",
      newsNeeded: "أدخل العنوان والرسالة.",
      delNewsWarn: "حذف هذا الإعلان؟",
      dataNote: "بياناتك محفوظة على هذا الجهاز والمتصفح فقط — لا شيء يُرسل إلى الإنترنت.",
      exportBackup: "تصدير نسخة احتياطية (JSON)", importBackup: "استيراد نسخة احتياطية",
      importWarn: "الاستيراد سيستبدل كل البيانات هنا بالملف. هل تريد المتابعة؟",
      importOk: "تم استيراد النسخة الاحتياطية.", importBad: "هذا الملف ليس نسخة احتياطية صالحة لسورو لاند."
    }
  };

  var METHODS = ["cash", "instapay", "vodafone", "bank", "card"];
  var ID_TYPES = ["passport", "birthCert", "nationalId", "other"];

  /* ---------- data ---------- */
  function seed() {
    return {
      lang: "en",
      families: [],
      terms: [],
      invoices: [],
      lessons: [
        { id: "l1", title: "Qur’ān & Short Sūrahs", weekday: 0, time: "09:00", teacher: "Ustādhah Mariam" },
        { id: "l2", title: "Arabic Alphabet", weekday: 1, time: "09:00", teacher: "Ustādhah Mariam" },
        { id: "l3", title: "Ṣalāh & Duʿā Practice", weekday: 2, time: "09:30", teacher: "Ustādh Yūsuf" },
        { id: "l4", title: "Aqīdah & Tawḥīd for Little Ones", weekday: 3, time: "09:00", teacher: "Ustādh Yūsuf" },
        { id: "l5", title: "Manners from the Sunnah & Outdoor Play", weekday: 4, time: "09:30", teacher: "Ustādhah Fāṭimah" },
        { id: "l6", title: "Stories of the Prophets", weekday: 5, time: "10:00", teacher: "Ustādhah Fāṭimah" }
      ],
      news: []
    };
  }

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && Array.isArray(s.families) && Array.isArray(s.lessons)) {
        if (!s.terms) s.terms = [];
        if (!s.invoices) s.invoices = [];
        if (!s.news) s.news = [];
        return s;
      }
    } catch (e) { /* fresh start */ }
    return seed();
  }

  var state = load();
  var ui = {
    screen: "welcome",        // welcome | parentList | parentHome | register | confirm | ownerLogin | owner
    tab: "families",
    childId: null,
    detailId: null,
    editLesson: null,
    regSource: "parent",
    photo: null
  };

  /* ---------- helpers ---------- */
  function t(k) { return (I18N[state.lang] && I18N[state.lang][k]) || I18N.en[k] || k; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function v(id) { var el = document.getElementById(id); return el ? el.value : ""; }
  function byId(arr, id) { for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i]; return null; }
  function uid() { return "id" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { toast("Storage full"); } }
  function egp(n) { return Number(n || 0).toLocaleString("en-US") + " EGP"; }
  function todayISO() { var d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function fmtISO(d) { try { return new Date(d + "T00:00:00").toLocaleDateString(LOCALE[state.lang], { day: "numeric", month: "short", year: "numeric" }); } catch (e) { return d; } }
  function fmtTs(ts) { return new Date(ts).toLocaleDateString(LOCALE[state.lang], { day: "numeric", month: "short", year: "numeric" }); }
  function backArrow() { return state.lang === "ar" ? "→" : "←"; }
  function hijriToday() {
    try {
      return new Intl.DateTimeFormat(LOCALE[state.lang] + "-u-ca-islamic-umalqura",
        { day: "numeric", month: "long", year: "numeric" }).format(new Date());
    } catch (e) { return new Date().toLocaleDateString(LOCALE[state.lang]); }
  }
  function toast(msg) {
    var el = document.getElementById("toast");
    el.textContent = msg; el.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el.hidden = true; }, 2600);
  }
  function paidOf(inv) { return inv.payments.reduce(function (s, p) { return s + p.amount; }, 0); }
  function invStatus(inv) {
    var paid = paidOf(inv);
    if (paid <= 0) return "unpaid";
    if (paid >= inv.amount) return "paid";
    return "part";
  }
  function invChip(inv) {
    var st = invStatus(inv);
    var label = st === "paid" ? t("statusPaid") : st === "part" ? t("statusPart") : t("statusUnpaid");
    return chip(label, "chip-" + st);
  }
  function familyChip(f) {
    if (f.status === "approved") return chip(t("approved"), "chip-approved");
    if (f.status === "rejected") return chip(t("rejected"), "chip-rejected");
    return chip(t("pendingReview"), "chip-pending");
  }
  function chip(label, cls) { return '<span class="chip ' + cls + '">' + esc(label) + "</span>"; }
  function crescent() {
    return '<svg class="crescent" viewBox="0 0 64 64" aria-hidden="true">' +
      '<circle cx="30" cy="32" r="22" fill="#1A6647"/>' +
      '<circle cx="40" cy="27" r="19" fill="#FFF8E8"/>' +
      '<path d="M50 10l1.8 4.2L56 16l-4.2 1.8L50 22l-1.8-4.2L44 16l4.2-1.8z" fill="#C9A227"/></svg>';
  }
  function sortedLessons() {
    return state.lessons.slice().sort(function (a, b) {
      return (a.weekday - b.weekday) || (a.time < b.time ? -1 : a.time > b.time ? 1 : 0);
    });
  }
  function topbar(title, backAction) {
    return '<div class="topbar"><button class="icon-btn round" data-action="' + backAction + '" aria-label="' +
      esc(t("back")) + '">' + backArrow() + "</button><h2>" + esc(title) + "</h2></div>";
  }
  function collectRows(sel, nameCls, phoneCls) {
    var box = document.querySelector(sel);
    if (!box) return [];
    var rows = box.querySelectorAll(".row-inline");
    var out = [];
    for (var i = 0; i < rows.length; i++) {
      var n = rows[i].querySelector("." + nameCls);
      var p = rows[i].querySelector("." + phoneCls);
      out.push({ name: n ? n.value.trim() : "", phone: p ? p.value.trim() : "" });
    }
    return out;
  }
  function contactRow() {
    return '<div class="row-inline"><input class="c-name" placeholder="' + esc(t("name")) + '">' +
      '<input class="c-phone" placeholder="' + esc(t("phone")) + '">' +
      '<button class="icon-btn danger" data-action="rm-row">✕</button></div>';
  }
  function pickupRow() {
    return '<div class="row-inline"><input class="p-name" placeholder="' + esc(t("name")) + '">' +
      '<input class="p-phone" placeholder="' + esc(t("phone")) + '">' +
      '<button class="icon-btn danger" data-action="rm-row">✕</button></div>';
  }
  function addInvoice(familyId, termId) {
    var exists = state.invoices.some(function (i) { return i.familyId === familyId && i.termId === termId; });
    if (!exists) state.invoices.push({ id: uid(), familyId: familyId, termId: termId, amount: FEE, payments: [] });
  }
  function makeInvoicesForFamily(f) { state.terms.forEach(function (tm) { addInvoice(f.id, tm.id); }); }
  function readPhoto(file, cb) {
    var r = new FileReader();
    r.onload = function () {
      var img = new Image();
      img.onload = function () {
        var max = 800, s = Math.min(1, max / Math.max(img.width, img.height));
        var c = document.createElement("canvas");
        c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        cb(c.toDataURL("image/jpeg", 0.7));
      };
      img.src = r.result;
    };
    r.readAsDataURL(file);
  }

  /* ---------- screens ---------- */
  function rWelcome() {
    var langs = ["en", "ar", "fr", "ru"].map(function (l) {
      return '<button class="pill' + (state.lang === l ? " active" : "") + '" data-action="set-lang" data-lang="' + l + '">' +
        LANG_LABEL[l] + "</button>";
    }).join("");
    return '<div class="welcome">' + crescent() +
      '<p class="greeting">' + esc(t("greeting")) + "</p>" +
      '<h1 class="app-title">Suru Land</h1>' +
      '<p class="tagline">' + esc(t("tagline")) + "</p>" +
      '<p class="section-label">' + esc(t("chooseLang")) + '</p><div class="lang-row">' + langs + "</div>" +
      '<p class="section-label">' + esc(t("roleQ")) + "</p>" +
      '<button class="btn btn-primary big" data-action="role-parent">' + esc(t("roleParent")) + "</button>" +
      '<button class="btn btn-secondary big" data-action="role-owner">' + esc(t("roleOwner")) + "</button>" +
      "</div>";
  }

  function rParentList() {
    var kids = state.families.filter(function (f) { return f.status === "approved"; });
    var list = kids.map(function (f) {
      return '<div class="card child-card" data-action="open-child" data-id="' + f.id + '">' +
        "<div><b>" + esc(f.childName) + "</b>" +
        (f.familyName ? '<div class="meta" style="color:var(--muted);font-size:13px">' + esc(f.familyName) + "</div>" : "") +
        "</div>" + '<button class="icon-btn small">' + esc(t("open")) + "</button></div>";
    }).join("");
    return topbar(t("parentArea"), "home") +
      '<p class="section-label">' + esc(t("chooseChild")) + "</p>" +
      (kids.length ? list : '<div class="card empty">' + esc(t("noChildren")) + "</div>") +
      '<button class="btn btn-ghost" data-action="new-reg" data-src="parent">＋ ' + esc(t("registerNewChild")) + "</button>";
  }

  function rParentHome() {
    var f = byId(state.families, ui.childId);
    if (!f) { ui.screen = "parentList"; return rParentList(); }
    var invs = state.invoices.filter(function (i) { return i.familyId === f.id; });
    var feesHtml;
    if (!invs.length) {
      feesHtml = '<div class="empty">' + esc(t("noFees")) + "</div>";
    } else {
      feesHtml = invs.map(function (inv) {
        var tm = byId(state.terms, inv.termId);
        var paid = paidOf(inv);
        return '<div class="sub-card"><div class="term-head"><h4>' + esc(tm ? tm.name : "") + "</h4>" + invChip(inv) + "</div>" +
          '<div class="kv"><span>' + esc(t("amountDue")) + "</span><b>" + egp(inv.amount) + "</b></div>" +
          '<div class="kv"><span>' + esc(t("paid")) + "</span><b>" + egp(paid) + "</b></div>" +
          '<div class="kv"><span>' + esc(t("balance")) + "</span><b>" + egp(inv.amount - paid) + "</b></div></div>";
      }).join("");
    }
    var methods = METHODS.map(function (m) { return "<li>" + esc(t(m)) + "</li>"; }).join("");
    var lessonsHtml = "";
    var byDay = {};
    sortedLessons().forEach(function (l) { (byDay[l.weekday] = byDay[l.weekday] || []).push(l); });
    for (var wd = 0; wd < 7; wd++) {
      if (!byDay[wd]) continue;
      lessonsHtml += '<div class="day-head">' + esc(WEEK_FULL[state.lang][wd]) + "</div>";
      lessonsHtml += byDay[wd].map(function (l) {
        return '<div class="lesson-item"><div><b>' + esc(l.title) + '</b><div class="meta">' + esc(l.teacher) +
          '</div></div><div style="white-space:nowrap">' + esc(l.time) + "</div></div>";
      }).join("");
    }
    var newsHtml = state.news.length
      ? state.news.map(function (n) {
          return '<div class="sub-card"><h4>' + esc(n.title) + '</h4><div style="font-size:13px;color:var(--muted)">' +
            fmtTs(n.ts) + '</div><p style="margin:6px 0 0;font-size:14px">' + esc(n.message) + "</p></div>";
        }).join("")
      : '<div class="empty">' + esc(t("noNews")) + "</div>";
    return topbar(t("parentArea"), "parent-back") +
      '<div class="card">' + '<p class="greeting" style="margin:0">' + esc(t("greeting")) + "</p>" +
      '<div class="big-name">' + esc(f.childName) + "</div>" +
      "<div style=\"font-size:14px\">" + esc(t("today")) + " · " + esc(hijriToday()) + "</div></div>" +
      '<div class="card"><h3>💰 ' + esc(t("fees")) + "</h3>" + feesHtml +
      '<p class="section-label" style="margin:14px 0 4px">' + esc(t("howToPay")) + '</p><ul class="methods">' + methods + "</ul></div>" +
      '<div class="card"><h3>📖 ' + esc(t("weeklyLessons")) + "</h3>" + lessonsHtml + "</div>" +
      '<div class="card"><h3>📣 ' + esc(t("newsCard")) + "</h3>" + newsHtml + "</div>" +
      '<button class="btn btn-ghost" data-action="new-reg" data-src="parent">＋ ' + esc(t("registerNewChild")) + "</button>";
  }

  function rRegister() {
    var back = ui.regSource === "owner" ? "reg-back-owner" : "reg-back-parent";
    var idOpts = ID_TYPES.map(function (k) { return '<option value="' + k + '">' + esc(t(k)) + "</option>"; }).join("");
    var langOpts = ["en", "ar", "fr", "ru"].map(function (l) {
      return '<option value="' + l + '"' + (l === state.lang ? " selected" : "") + ">" + LANG_LABEL[l] + "</option>";
    }).join("");
    return topbar(t("newReg"), back) +
      '<div id="regError" class="error" hidden></div>' +
      "<fieldset><legend>" + esc(t("childName")) + '</legend>' +
      '<div class="field"><label>' + esc(t("childName")) + '</label><input id="regChildName"></div>' +
      '<div class="field"><label>' + esc(t("dob")) + '</label><input id="regDob" type="date"></div></fieldset>' +
      "<fieldset><legend>" + esc(t("idSection")) + "</legend>" +
      '<div class="field"><label>' + esc(t("idType")) + '</label><select id="regIdType">' + idOpts + "</select></div>" +
      '<div class="field"><label>' + esc(t("idNumber")) + '</label><input id="regIdNumber"></div>' +
      '<div class="field"><label>' + esc(t("uploadPhoto")) + '</label><input id="regIdPhoto" type="file" accept="image/*">' +
      '<p class="hint" id="photoLabel"></p></div></fieldset>' +
      "<fieldset><legend>" + esc(t("familySection")) + "</legend>" +
      '<div class="field"><label>' + esc(t("familyName")) + '</label><input id="regFam"></div></fieldset>' +
      "<fieldset><legend>" + esc(t("parents")) + "</legend>" +
      '<div class="field"><label>' + esc(t("mother")) + " — " + esc(t("name")) + '</label><input id="regMName"></div>' +
      '<div class="field"><label>' + esc(t("mother")) + " — " + esc(t("phone")) + '</label><input id="regMPhone" type="tel"></div>' +
      '<div class="field"><label>' + esc(t("mother")) + " — " + esc(t("email")) + '</label><input id="regMEmail" type="email"></div>' +
      '<div class="field"><label>' + esc(t("father")) + " — " + esc(t("name")) + '</label><input id="regFName"></div>' +
      '<div class="field"><label>' + esc(t("father")) + " — " + esc(t("phone")) + '</label><input id="regFPhone" type="tel"></div>' +
      '<div class="field"><label>' + esc(t("father")) + " — " + esc(t("email")) + '</label><input id="regFEmail" type="email"></div>' +
      '<p class="hint">' + esc(t("parentHint")) + "</p></fieldset>" +
      "<fieldset><legend>" + esc(t("emergency")) + "</legend>" +
      '<div id="regContacts">' + contactRow() + "</div>" +
      '<button class="icon-btn small" style="margin-top:8px" data-action="add-contact-row">＋ ' + esc(t("addContact")) + "</button>" +
      '<p class="hint">' + esc(t("emergencyHint")) + "</p></fieldset>" +
      "<fieldset><legend>" + esc(t("pickup")) + "</legend>" +
      '<div id="regPickup"></div>' +
      '<button class="icon-btn small" style="margin-top:8px" data-action="add-pickup-row">＋ ' + esc(t("addPickup")) + "</button>" +
      '<p class="hint">' + esc(t("pickupHint")) + "</p></fieldset>" +
      "<fieldset><legend>" + esc(t("prefLang")) + "</legend>" +
      '<div class="field"><select id="regLang">' + langOpts + "</select></div></fieldset>" +
      '<button class="btn btn-primary big" data-action="submit-reg">' + esc(t("submit")) + "</button>";
  }

  function rConfirm() {
    return '<div class="welcome">' + crescent() +
      '<div style="margin-top:14px">' + chip(t("pendingReview"), "chip-pending") + "</div>" +
      '<h2 style="color:var(--emerald);font-size:26px;margin:12px 0 6px">' + esc(t("confirmTitle")) + "</h2>" +
      '<p class="tagline">' + esc(t("confirmBody")) + "</p>" +
      '<button class="btn btn-primary big" style="max-width:320px;margin:20px auto 0" data-action="confirm-done">' +
      esc(t("done")) + "</button></div>";
  }

  function rOwnerLogin() {
    return '<div class="welcome" style="padding-top:20px">' + '<svg class="crescent sm" viewBox="0 0 64 64" aria-hidden="true">' +
      '<circle cx="30" cy="32" r="22" fill="#1A6647"/><circle cx="40" cy="27" r="19" fill="#FFF8E8"/></svg>' +
      '<h2 style="color:var(--emerald);margin:10px 0 4px">' + esc(t("ownerArea")) + "</h2>" +
      '<div style="max-width:380px;margin:14px auto 0;text-align:start">' +
      '<div class="field"><label>' + esc(t("email")) + '</label><input id="ownEmail" type="email"></div>' +
      '<div class="field"><label>' + esc(t("password")) + '</label><input id="ownPass" type="password"></div>' +
      '<button class="btn btn-primary" data-action="signin">' + esc(t("signIn")) + "</button>" +
      '<button class="btn btn-ghost" data-action="guest">' + esc(t("guest")) + "</button>" +
      '<p class="hint" style="text-align:center;margin-top:14px">' + esc(t("loginHint")) + "</p>" +
      "</div></div>";
  }

  function rOwner() {
    var tabs = [["families", "tabFamilies"], ["fees", "tabFees"], ["lessons", "tabLessons"], ["news", "tabNews"], ["data", "tabData"]]
      .map(function (p) {
        return '<button class="tab' + (ui.tab === p[0] ? " active" : "") + '" data-action="tab" data-tab="' + p[0] + '">' +
          esc(t(p[1])) + "</button>";
      }).join("");
    var body;
    if (ui.tab === "families") body = rFamilies();
    else if (ui.tab === "fees") body = rFees();
    else if (ui.tab === "lessons") body = rLessons();
    else if (ui.tab === "news") body = rNews();
    else body = rData();
    return '<div class="topbar"><h2>' + esc(t("ownerArea")) + "</h2>" +
      '<button class="icon-btn small danger" data-action="signout">' + esc(t("signOut")) + "</button></div>" +
      '<div class="tabs">' + tabs + "</div>" + body;
  }

  function rFamilies() {
    if (ui.detailId) return rFamilyDetail();
    var pending = state.families.filter(function (f) { return f.status === "pending"; });
    var pendingHtml = pending.map(function (f) {
      return '<div class="sub-card"><div class="term-head"><div><b>' + esc(f.childName) + "</b>" +
        (f.familyName ? " · " + esc(f.familyName) : "") + "</div>" + familyChip(f) + "</div>" +
        '<div style="display:flex;gap:8px;margin-top:10px">' +
        '<button class="btn small btn-secondary" data-action="approve" data-id="' + f.id + '">✓ ' + esc(t("approve")) + "</button>" +
        '<button class="btn small danger" data-action="reject" data-id="' + f.id + '">✕ ' + esc(t("reject")) + "</button>" +
        '<button class="icon-btn small" data-action="open-family" data-id="' + f.id + '">' + esc(t("open")) + "</button></div></div>";
    }).join("");
    var kids = state.families.map(function (f) {
      return '<div class="card child-card" data-action="open-family" data-id="' + f.id + '">' +
        "<div><b>" + esc(f.childName) + "</b>" +
        (f.familyName ? '<div style="color:var(--muted);font-size:13px">' + esc(f.familyName) + "</div>" : "") + "</div>" +
        familyChip(f) + "</div>";
    }).join("");
    return '<button class="btn btn-primary" data-action="new-reg" data-src="owner">＋ ' + esc(t("newReg")) + "</button>" +
      (pending.length ? '<p class="section-label">' + esc(t("pendingReview")) + "</p>" + pendingHtml : "") +
      '<p class="section-label">' + esc(t("children")) + "</p>" +
      (state.families.length ? kids : '<div class="card empty">' + esc(t("noFamilies")) + "</div>");
  }

  function rFamilyDetail() {
    var f = byId(state.families, ui.detailId);
    if (!f) { ui.detailId = null; return rFamilies(); }
    function kvRow(k, val) { return '<div class="kv"><span>' + esc(k) + "</span><b>" + esc(val) + "</b></div>"; }
    function people(list) {
      return list && list.length
        ? list.map(function (p) { return esc(p.name) + (p.phone ? " · " + esc(p.phone) : ""); }).join("<br>")
        : "—";
    }
    var parentsHtml = [f.mother, f.father].filter(function (p) { return p && p.name; }).map(function (p) {
      return "<b>" + esc(p.name) + "</b>" + (p.phone ? " · " + esc(p.phone) : "") + (p.email ? " · " + esc(p.email) : "");
    }).join("<br>") || "—";
    var approveHtml = f.status === "pending"
      ? '<div style="display:flex;gap:8px;margin-top:12px">' +
        '<button class="btn small btn-secondary" data-action="approve" data-id="' + f.id + '">✓ ' + esc(t("approve")) + "</button>" +
        '<button class="btn small danger" data-action="reject" data-id="' + f.id + '">✕ ' + esc(t("reject")) + "</button></div>"
      : "";
    return topbar(t("familyDetail"), "back-families") +
      '<div class="card"><div class="term-head"><h3>' + esc(f.childName) + "</h3>" + familyChip(f) + "</div>" +
      (f.familyName ? kvRow(t("familyName"), f.familyName) : "") +
      kvRow(t("dob"), fmtISO(f.dob)) +
      kvRow(t("idDoc"), esc(t(f.idType)) + (f.idNumber ? " · " + f.idNumber : "")) +
      (f.idPhoto ? '<img class="thumb" src="' + f.idPhoto + '" alt="ID">' : "") +
      '<p class="section-label" style="margin:14px 0 4px">' + esc(t("parents")) + "</p>" + parentsHtml +
      '<p class="section-label" style="margin:14px 0 4px">' + esc(t("contacts")) + "</p>" + people(f.emergency) +
      '<p class="section-label" style="margin:14px 0 4px">' + esc(t("pickupPeople")) + "</p>" + people(f.pickup) +
      kvRow(t("languageLabel"), LANG_LABEL[f.language] || f.language || "") +
      approveHtml + "</div>";
  }

  function rFees() {
    var addTerm =
      '<div class="card"><h3>🗓 ' + esc(t("addTerm")) + "</h3>" +
      '<div class="row-inline"><input id="termName" placeholder="' + esc(t("termName")) + '">' +
      '<button class="icon-btn small" data-action="add-term">' + esc(t("addTerm")) + "</button></div></div>";
    if (!state.terms.length) {
      return '<div class="card" style="font-size:14px">' + esc(t("feeNote")) + "</div>" + addTerm +
        '<div class="card empty">' + esc(t("noTerms")) + "</div>";
    }
    var termsHtml = state.terms.map(function (tm) {
      var invs = state.families.filter(function (f) { return f.status === "approved"; }).map(function (f) {
        var inv = state.invoices.find(function (i) { return i.familyId === f.id && i.termId === tm.id; });
        return { f: f, inv: inv };
      }).filter(function (x) { return x.inv; });
      var invHtml = invs.map(function (x) {
        var paid = paidOf(x.inv);
        var pays = x.inv.payments.map(function (p) {
          return '<div class="payment-row"><span>' + egp(p.amount) + " · " + fmtISO(p.date) + " · " + esc(t(p.method)) +
            '</span><button class="icon-btn small danger" data-action="del-payment" data-id="' + p.id + '">✕</button></div>';
        }).join("");
        return '<div class="sub-card"><div class="term-head"><h4>' + esc(x.f.childName) + "</h4>" + invChip(x.inv) + "</div>" +
          '<div class="kv"><span>' + esc(t("amountDue")) + "</span><b>" + egp(x.inv.amount) + "</b></div>" +
          '<div class="kv"><span>' + esc(t("paid")) + "</span><b>" + egp(paid) + "</b></div>" +
          '<div class="kv"><span>' + esc(t("balance")) + "</span><b>" + egp(x.inv.amount - paid) + "</b></div>" +
          pays +
          '<div class="row-inline"><input id="pay-' + x.inv.id + '-a" type="number" min="0" placeholder="' + esc(t("amount")) + '">' +
          '<input id="pay-' + x.inv.id + '-d" type="date" value="' + todayISO() + '" style="max-width:150px">' +
          '<select id="pay-' + x.inv.id + '-m" style="max-width:150px">' +
          METHODS.map(function (m) { return '<option value="' + m + '">' + esc(t(m)) + "</option>"; }).join("") +
          '</select></div><button class="icon-btn small" style="margin-top:8px" data-action="add-payment" data-id="' +
          x.inv.id + '">＋ ' + esc(t("addPayment")) + "</button></div>";
      }).join("") || '<div class="empty">' + esc(t("noFamilies")) + "</div>";
      return '<div class="card"><div class="term-head"><h3>' + esc(tm.name) + "</h3>" +
        '<button class="icon-btn small danger" data-action="del-term" data-id="' + tm.id + '">' + esc(t("delete")) + "</button></div>" +
        invHtml + "</div>";
    }).join("");
    return '<div class="card" style="font-size:14px">' + esc(t("feeNote")) + "</div>" + addTerm + termsHtml;
  }

  function rLessons() {
    var ed = ui.editLesson ? byId(state.lessons, ui.editLesson) : null;
    var dayOpts = WEEK_FULL[state.lang].map(function (d, i) {
      return '<option value="' + i + '"' + (ed && ed.weekday === i ? " selected" : "") + ">" + esc(d) + "</option>";
    }).join("");
    var form =
      '<div class="card"><h3>' + esc(ed ? t("editLesson") : t("addLesson")) + "</h3>" +
      '<div class="field"><label>' + esc(t("lesson")) + '</label><input id="lesTitle" value="' + esc(ed ? ed.title : "") + '"></div>' +
      '<div class="row-inline">' +
      '<select id="lesDay">' + dayOpts + "</select>" +
      '<input id="lesTime" type="time" value="' + esc(ed ? ed.time : "09:00") + '"></div>' +
      '<div class="field"><label>' + esc(t("teacher")) + '</label><input id="lesTeacher" value="' + esc(ed ? ed.teacher : "") + '"></div>' +
      '<div style="display:flex;gap:8px;margin-top:10px">' +
      '<button class="btn small btn-secondary" data-action="lesson-save">✓ ' + esc(t("save")) + "</button>" +
      (ed ? '<button class="icon-btn small" data-action="lesson-cancel">' + esc(t("cancel")) + "</button>" : "") +
      "</div></div>";
    var listHtml = sortedLessons().map(function (l) {
      return '<div class="lesson-card-row"><div><b>' + esc(l.title) + "</b>" +
        '<div class="meta" style="color:var(--muted);font-size:13px">' + esc(WEEK_FULL[state.lang][l.weekday]) +
        " · " + esc(l.time) + " · " + esc(l.teacher) + "</div></div>" +
        '<div style="display:flex;gap:6px">' +
        '<button class="icon-btn small" data-action="lesson-edit" data-id="' + l.id + '">✎</button>' +
        '<button class="icon-btn small danger" data-action="lesson-del" data-id="' + l.id + '">✕</button></div></div>';
    }).join("");
    return form + '<div class="card">' + listHtml + "</div>";
  }

  function rNews() {
    var listHtml = state.news.map(function (n) {
      return '<div class="sub-card"><div class="term-head"><h4>' + esc(n.title) + "</h4>" +
        '<button class="icon-btn small danger" data-action="news-del" data-id="' + n.id + '">✕</button></div>' +
        '<div style="font-size:13px;color:var(--muted)">' + fmtTs(n.ts) + "</div>" +
        '<p style="margin:6px 0 0;font-size:14px">' + esc(n.message) + "</p></div>";
    }).join("");
    return '<div class="card"><h3>📣 ' + esc(t("post")) + "</h3>" +
      '<div class="field"><label>' + esc(t("postTitle")) + '</label><input id="newsTitle"></div>' +
      '<div class="field"><label>' + esc(t("postMessage")) + '</label><textarea id="newsMsg"></textarea></div>' +
      '<button class="btn small btn-secondary" style="margin-top:10px" data-action="news-post">' + esc(t("post")) + "</button></div>" +
      '<div class="card">' + (listHtml || '<div class="empty">' + esc(t("noNews")) + "</div>") + "</div>";
  }

  function rData() {
    return '<div class="card"><h3>🗄 ' + esc(t("tabData")) + "</h3>" +
      '<p style="font-size:14px;margin:0">' + esc(t("dataNote")) + "</p>" +
      '<p class="hint">' + state.families.length + " " + esc(t("children")) + " · " + state.terms.length + " " +
      esc(t("term")) + " · " + state.news.length + " " + esc(t("newsCard")) + "</p>" +
      '<button class="btn btn-secondary" data-action="export">⬇ ' + esc(t("exportBackup")) + "</button>" +
      '<button class="btn btn-ghost" data-action="import">⬆ ' + esc(t("importBackup")) + "</button>" +
      '<input id="importFile" type="file" accept="application/json,.json" hidden></div>';
  }

  /* ---------- actions ---------- */
  function submitReg() {
    var child = v("regChildName").trim(), dob = v("regDob");
    var err = null;
    if (!child || !dob) err = t("childNeeded");
    var idNum = v("regIdNumber").trim();
    if (!err && !idNum && !ui.photo) err = t("idNeeded");
    var m = { name: v("regMName").trim(), phone: v("regMPhone").trim(), email: v("regMEmail").trim() };
    var fa = { name: v("regFName").trim(), phone: v("regFPhone").trim(), email: v("regFEmail").trim() };
    var hasParent = m.name || fa.name;
    if (!err && !hasParent) err = t("parentNeeded");
    var contacts = collectRows("#regContacts", "c-name", "c-phone");
    if (!err && !contacts.some(function (c) { return c.name && c.phone; })) err = t("emergencyNeeded");
    if (err) {
      var el = document.getElementById("regError");
      if (el) { el.textContent = err; el.hidden = false; }
      window.scrollTo(0, 0);
      return;
    }
    var family = {
      id: uid(), status: "pending", createdAt: Date.now(),
      childName: child, dob: dob,
      idType: v("regIdType"), idNumber: idNum, idPhoto: ui.photo || "",
      familyName: v("regFam").trim(),
      mother: m, father: fa,
      emergency: contacts.filter(function (c) { return c.name || c.phone; }),
      pickup: collectRows("#regPickup", "p-name", "p-phone").filter(function (p) { return p.name || p.phone; }),
      language: v("regLang") || state.lang
    };
    state.families.push(family);
    save();
    ui.photo = null;
    ui.screen = "confirm";
    render();
  }

  function addTerm() {
    var name = v("termName").trim();
    if (!name) { toast(t("termNameNeeded")); return; }
    var tm = { id: uid(), name: name, createdAt: Date.now() };
    state.terms.push(tm);
    state.families.forEach(function (f) { if (f.status === "approved") addInvoice(f.id, tm.id); });
    save(); render();
  }

  function addPayment(invId) {
    var inv = byId(state.invoices, invId);
    if (!inv) return;
    var amt = parseFloat(v("pay-" + invId + "-a"));
    if (!amt || amt <= 0) { toast(t("amountNeeded")); return; }
    var d = v("pay-" + invId + "-d") || todayISO();
    var mth = v("pay-" + invId + "-m") || "cash";
    inv.payments.push({ id: uid(), amount: amt, date: d, method: mth });
    save(); render();
  }

  function saveLesson() {
    var title = v("lesTitle").trim(), teacher = v("lesTeacher").trim();
    if (!title || !teacher) { toast(t("lessonNeeded")); return; }
    var day = parseInt(v("lesDay"), 10) || 0;
    var time = v("lesTime") || "09:00";
    if (ui.editLesson) {
      var l = byId(state.lessons, ui.editLesson);
      if (l) { l.title = title; l.weekday = day; l.time = time; l.teacher = teacher; }
      ui.editLesson = null;
    } else {
      state.lessons.push({ id: uid(), title: title, weekday: day, time: time, teacher: teacher });
    }
    save(); render();
  }

  function postNews() {
    var title = v("newsTitle").trim(), msg = v("newsMsg").trim();
    if (!title || !msg) { toast(t("newsNeeded")); return; }
    state.news.unshift({ id: uid(), title: title, message: msg, ts: Date.now() });
    save(); render();
  }

  function doExport() {
    var blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "suru-land-backup.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function doImport(file) {
    var r = new FileReader();
    r.onload = function () {
      try {
        var obj = JSON.parse(r.result);
        if (!obj || !Array.isArray(obj.families) || !Array.isArray(obj.lessons)) throw 0;
        if (!obj.terms) obj.terms = [];
        if (!obj.invoices) obj.invoices = [];
        if (!obj.news) obj.news = [];
        state = obj;
        save(); render(); toast(t("importOk"));
      } catch (e) { toast(t("importBad")); }
    };
    r.readAsText(file);
  }

  /* ---------- router ---------- */
  function render() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    var html;
    switch (ui.screen) {
      case "parentList": html = rParentList(); break;
      case "parentHome": html = rParentHome(); break;
      case "register": html = rRegister(); break;
      case "confirm": html = rConfirm(); break;
      case "ownerLogin": html = rOwnerLogin(); break;
      case "owner": html = rOwner(); break;
      default: html = rWelcome();
    }
    document.getElementById("app").innerHTML = html;
    window.scrollTo(0, 0);
  }

  document.getElementById("app").addEventListener("click", function (e) {
    var el = e.target.closest("[data-action]");
    if (!el) return;
    var a = el.getAttribute("data-action");
    var f;
    switch (a) {
      case "set-lang":
        state.lang = el.getAttribute("data-lang"); save(); render(); break;
      case "role-parent": ui.screen = "parentList"; render(); break;
      case "role-owner": ui.screen = "ownerLogin"; render(); break;
      case "signin": {
        if (!v("ownEmail").trim() || !v("ownPass").trim()) { toast(t("fillBoth")); break; }
        ui.screen = "owner"; ui.tab = "families"; render(); break;
      }
      case "guest": ui.screen = "owner"; ui.tab = "families"; render(); break;
      case "signout": case "home": ui.screen = "welcome"; render(); break;
      case "tab":
        ui.tab = el.getAttribute("data-tab"); ui.detailId = null; ui.editLesson = null; render(); break;
      case "parent-back": ui.screen = "parentList"; render(); break;
      case "open-child":
        ui.childId = el.getAttribute("data-id"); ui.screen = "parentHome"; render(); break;
      case "open-family":
        ui.detailId = el.getAttribute("data-id"); render(); break;
      case "back-families": ui.detailId = null; render(); break;
      case "new-reg":
        ui.regSource = el.getAttribute("data-src") || "parent";
        ui.photo = null; ui.screen = "register"; render(); break;
      case "reg-back-owner": ui.screen = "owner"; ui.tab = "families"; render(); break;
      case "reg-back-parent": ui.screen = "parentList"; render(); break;
      case "submit-reg": submitReg(); break;
      case "confirm-done":
        if (ui.regSource === "owner") { ui.screen = "owner"; ui.tab = "families"; }
        else { ui.screen = "welcome"; }
        render(); break;
      case "approve":
        f = byId(state.families, el.getAttribute("data-id"));
        if (f) { f.status = "approved"; makeInvoicesForFamily(f); save(); }
        render(); break;
      case "reject":
        f = byId(state.families, el.getAttribute("data-id"));
        if (f) { f.status = "rejected"; save(); }
        render(); break;
      case "add-contact-row":
        document.getElementById("regContacts").insertAdjacentHTML("beforeend", contactRow()); break;
      case "add-pickup-row":
        document.getElementById("regPickup").insertAdjacentHTML("beforeend", pickupRow()); break;
      case "rm-row": {
        var row = el.closest(".row-inline");
        if (row) row.remove();
        break;
      }
      case "add-term": addTerm(); break;
      case "del-term": {
        var tid = el.getAttribute("data-id");
        if (confirm(t("delTermWarn"))) {
          state.terms = state.terms.filter(function (x) { return x.id !== tid; });
          state.invoices = state.invoices.filter(function (i) { return i.termId !== tid; });
          save(); render();
        }
        break;
      }
      case "add-payment": addPayment(el.getAttribute("data-id")); break;
      case "del-payment": {
        var pid = el.getAttribute("data-id");
        if (confirm(t("delPayWarn"))) {
          state.invoices.forEach(function (inv) {
            inv.payments = inv.payments.filter(function (p) { return p.id !== pid; });
          });
          save(); render();
        }
        break;
      }
      case "lesson-new": ui.editLesson = null; render(); break;
      case "lesson-edit": ui.editLesson = el.getAttribute("data-id"); render(); break;
      case "lesson-save": saveLesson(); break;
      case "lesson-cancel": ui.editLesson = null; render(); break;
      case "lesson-del": {
        var lid = el.getAttribute("data-id");
        if (confirm(t("delLessonWarn"))) {
          state.lessons = state.lessons.filter(function (l) { return l.id !== lid; });
          save(); render();
        }
        break;
      }
      case "news-post": postNews(); break;
      case "news-del": {
        var nid = el.getAttribute("data-id");
        if (confirm(t("delNewsWarn"))) {
          state.news = state.news.filter(function (n) { return n.id !== nid; });
          save(); render();
        }
        break;
      }
      case "export": doExport(); break;
      case "import":
        if (confirm(t("importWarn"))) {
          var inp = document.getElementById("importFile");
          inp.value = "";
          inp.click();
        }
        break;
    }
  });

  document.getElementById("app").addEventListener("change", function (e) {
    var tg = e.target;
    if (tg.id === "regIdPhoto" && tg.files && tg.files[0]) {
      readPhoto(tg.files[0], function (dataUrl) {
        ui.photo = dataUrl;
        var lab = document.getElementById("photoLabel");
        if (lab) lab.textContent = t("photoChosen");
      });
    }
    if (tg.id === "importFile" && tg.files && tg.files[0]) doImport(tg.files[0]);
  });

  render();
})();
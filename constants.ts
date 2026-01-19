
import { StepMetadata, TermDefinition } from './types';

export const TERMS: Record<string, TermDefinition> = {
  "DNS": {
    term: { en: "DNS (Domain Name System)", fa: "سامانه نام دامنه (DNS)" },
    definition: { 
      en: "The phonebook of the Internet. It translates human-readable domain names into IP addresses.",
      fa: "دفترچه تلفن اینترنت که نام‌های دامنه قابل خواندن برای انسان را به آدرس‌های IP تبدیل می‌کند."
    }
  },
  "NameServer": {
    term: { en: "NameServer", fa: "نام‌سرور (NameServer)" },
    definition: { 
      en: "A specialized server that stores DNS records for a domain.",
      fa: "سروری تخصصی که رکوردهای DNS یک دامنه را در خود ذخیره می‌کند."
    }
  },
  "NS Record": {
    term: { en: "NS (Name Server) Record", fa: "رکورد NS" },
    definition: { 
      en: "Delegates a DNS zone to use the given authoritative name servers.",
      fa: "یک زون DNS را به نام‌سرورهای معتبر مشخص شده واگذار می‌کند."
    }
  },
  "A Record": {
    term: { en: "A (Address) Record", fa: "رکورد A" },
    definition: { 
      en: "Maps a hostname to an IPv4 address.",
      fa: "یک نام میزبان را به یک آدرس IPv4 متصل می‌کند."
    }
  },
  "MTU": {
    term: { en: "MTU (Maximum Transmission Unit)", fa: "واحد بیشینه انتقال (MTU)" },
    definition: { 
      en: "The size of the largest protocol data unit that can be communicated in a single network layer transaction.",
      fa: "بزرگترین اندازه واحد داده‌ای که می‌تواند در یک تراکنش لایه شبکه منتقل شود."
    }
  },
  "SSH": {
    term: { en: "SSH (Secure Shell)", fa: "پروتکل SSH" },
    definition: { 
      en: "A cryptographic network protocol for operating network services securely over an unsecured network.",
      fa: "یک پروتکل امنیتی برای اتصال و مدیریت سرورها از راه دور به صورت رمزنگاری شده."
    }
  }
};

export const STEP_METADATA: StepMetadata[] = [
  {
    id: 1,
    title: { en: "Prerequisites", fa: "پیش‌نیازها" },
    description: { en: "Overall requirements for a successful setup.", fa: "نیازمندی‌های کلی برای راه‌اندازی موفق." },
    terms: ["DNS"]
  },
  {
    id: 2,
    title: { en: "Domain Setup", fa: "تنظیم دامنه" },
    description: { en: "Configure your DNS zones for tunneling.", fa: "تنظیم زون‌های DNS برای ایجاد تونل." },
    terms: ["A Record", "NS Record", "NameServer"]
  },
  {
    id: 3,
    title: { en: "SSH Connection", fa: "اتصال به سرور (SSH)" },
    description: { en: "How to log in to your Linux server.", fa: "نحوه ورود و کنترل سرور لینوکسی شما." },
    terms: ["SSH"]
  },
  {
    id: 4,
    title: { en: "Deployment Command", fa: "فرمان نصب" },
    description: { en: "Deploy DNSTT server via script.", fa: "نصب سرور DNSTT از طریق اسکریپت." },
    terms: []
  },
  {
    id: 5,
    title: { en: "Script Walkthrough", fa: "راهنمای اسکریپت" },
    description: { en: "Interacting with the installation prompts.", fa: "تعامل با پرسش‌های حین نصب." },
    terms: ["MTU"]
  },
  {
    id: 6,
    title: { en: "Server Management", fa: "مدیریت سرور" },
    description: { en: "Post-installation management and monitoring.", fa: "مدیریت و مانیتورینگ سرور پس از نصب." },
    terms: []
  },
  {
    id: 7,
    title: { en: "Client Applications", fa: "اپلیکیشن‌های کلاینت" },
    description: { en: "Choosing the right app for your device.", fa: "انتخاب اپلیکیشن مناسب برای دستگاه شما." },
    terms: []
  },
  {
    id: 8,
    title: { en: "App Configuration", fa: "تنظیمات اپلیکیشن" },
    description: { en: "Configuring HTTP Injector for connection.", fa: "تنظیمات HTTP Injector برای برقراری اتصال." },
    terms: []
  },
  {
    id: 9,
    title: { en: "Troubleshooting & Support", fa: "عیب‌یابی و پشتیبانی" },
    description: { en: "Common issues and project credits.", fa: "مشکلات رایج و اعتبار پروژه‌ها." },
    terms: []
  }
];

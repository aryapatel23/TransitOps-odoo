<p align="center">
  <img src="https://img.shields.io/badge/🚌_TransitOps-Smart_Transport_Operations-1a1a2e?style=for-the-badge&labelColor=1a1a2e&color=c58b32" alt="TransitOps" />
</p>

<h1 align="center">TransitOps — Smart Transport Operations Platform</h1>

<p align="center">
  <strong>🚛 End-to-end fleet intelligence: from dispatch to compliance, all in one platform.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-≥18.0-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/PostgreSQL-Latest-336791?style=flat-square&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-4.19-000000?style=flat-square&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8.1-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-Auth-pink?style=flat-square&logo=jsonwebtokens&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Roles-6_User_Roles-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/Emails-7_Auto_Triggers-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/API_Endpoints-40+-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/DB_Tables-8_Core_Tables-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Document_Types-5_Compliance_Docs-red?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square" />
</p>

---

## 📋 Table of Contents

<details>
<summary>Click to expand</summary>

- [🎯 Overview](#-overview)
- [🌟 Why TransitOps?](#-why-transitops)
- [🏆 Key Metrics](#-key-metrics)
- [✨ Feature Highlights](#-feature-highlights)
- [🏗️ System Architecture](#️-system-architecture)
- [🔄 Data Flow and Lifecycle](#-data-flow-and-lifecycle)
- [👥 Roles and Permissions](#-roles-and-permissions)
- [📧 Automated Email Notifications](#-automated-email-notifications)
- [📄 Vehicle Document Compliance](#-vehicle-document-compliance)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Installation and Setup](#-installation-and-setup)
- [🗄️ Database Schema](#️-database-schema)
- [📡 API Reference](#-api-reference)
- [📂 Project Structure](#-project-structure)
- [🔐 Security](#-security)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🔮 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)

</details>

---

## 🎯 Overview

**TransitOps** is a full-stack, role-based **Smart Transport Operations Platform** built for modern fleet management teams. It brings together vehicle registry, driver compliance, real-time trip lifecycle management, automated financial tracking, and regulatory document management under a single unified interface — all secured by a **6-tier role-based access control** system.

> Built to solve the real-world chaos of managing a mixed-type commercial fleet: expired compliance documents, untraceable trips, untracked fuel costs, and zero visibility into safety risk. TransitOps fixes all of it.

---

## 🌟 Why TransitOps?

```mermaid
graph LR
    A[❌ Before TransitOps] --> B[Lost compliance docs]
    A --> C[Manual trip logs]
    A --> D[No safety visibility]
    A --> E[Zero automated alerts]

    F[✅ After TransitOps] --> G[Auto document alerts]
    F --> H[Smart trip dispatch]
    F --> I[Driver safety scores]
    F --> J[7 email triggers]

    style A fill:#e74c3c,color:#fff,stroke:#c0392b
    style B fill:#ff6b6b,color:#fff,stroke:#c0392b
    style C fill:#ff6b6b,color:#fff,stroke:#c0392b
    style D fill:#ff6b6b,color:#fff,stroke:#c0392b
    style E fill:#ff6b6b,color:#fff,stroke:#c0392b
    style F fill:#27ae60,color:#fff,stroke:#1e8449
    style G fill:#2ecc71,color:#fff,stroke:#1e8449
    style H fill:#2ecc71,color:#fff,stroke:#1e8449
    style I fill:#2ecc71,color:#fff,stroke:#1e8449
    style J fill:#2ecc71,color:#fff,stroke:#1e8449
```

---

## 🏆 Key Metrics

| Metric | Value |
|--------|-------|
| **User Roles** | 6 (ADMIN, Fleet Manager, Dispatcher, Safety Officer, Financial Analyst, Driver) |
| **API Endpoints** | 40+ RESTful routes |
| **Database Tables** | 8 core tables |
| **PostgreSQL ENUMs** | 7 custom types |
| **Optimized DB Indexes** | 14 |
| **Email Notification Triggers** | 7 automated events |
| **Vehicle Document Types** | 5 (RC Book, PUC, Insurance, Permits, Fitness Certificate) |
| **Trip Statuses** | 4 (Draft → Dispatched → Completed / Cancelled) |
| **Export Formats** | CSV (per-module) |

---

## ✨ Feature Highlights

### 🚗 Fleet and Vehicle Management

<table>
<tr>
<td width="50%">

**Vehicle Registry**
- ✅ Register vehicles with full specs (model, type, load capacity, region, acquisition cost)
- ✅ Real-time status tracking: `AVAILABLE` / `ON_TRIP` / `IN_SHOP` / `RETIRED`
- ✅ Live odometer updates on every completed trip
- ✅ Fleet utilization percentage computed server-side
- ✅ Region-based fleet segmentation

</td>
<td width="50%">

**Document Compliance**
- ✅ Upload and manage RC Book, PUC, Insurance Policy, Permits, Fitness Certificates
- ✅ Auto-computed compliance status: `VALID` / `EXPIRING_SOON` / `EXPIRED`
- ✅ 30-day expiry warning threshold
- ✅ Dashboard document alerts panel (Fleet Manager and Safety Officer only)
- ✅ File upload support: PDF, JPG, PNG, Word (up to 10 MB per file)

</td>
</tr>
</table>

---

### 👨‍✈️ Driver Management

<table>
<tr>
<td width="50%">

**Driver Lifecycle**
- ✅ License number, category (Light / Heavy Commercial), expiry tracking
- ✅ License validity auto-classification: `VALID` / `EXPIRING_SOON` / `EXPIRED`
- ✅ Status management: `AVAILABLE` / `ON_TRIP` / `OFF_DUTY` / `SUSPENDED`
- ✅ Advanced search by name, license number, or contact

</td>
<td width="50%">

**Safety Scoring**
- ✅ Per-driver safety score (0–100, enforced via DB constraint)
- ✅ Sortable safety leaderboard
- ✅ Suspension triggers automated email alert to Safety Officer
- ✅ Driver self-service portal with personal trip history and stats

</td>
</tr>
</table>

---

### 🗺️ Trip Lifecycle Management

```mermaid
stateDiagram-v2
    [*] --> DRAFT : Dispatcher creates trip
    DRAFT --> DISPATCHED : Dispatch triggered\n(vehicle + driver locked,\nemail sent to driver)
    DISPATCHED --> COMPLETED : Driver submits odometer\n+ fuel consumed\n(auto fuel log created)
    DISPATCHED --> CANCELLED : Trip aborted\n(resources released,\nemail notification sent)
    COMPLETED --> [*]
    CANCELLED --> [*]
```

- ✅ Auto trip-code generation (`TRIP-XXXXXX`)
- ✅ Cargo weight vs. vehicle capacity validation before dispatch
- ✅ Driver and vehicle locked on dispatch — prevents double-booking
- ✅ Fuel log auto-created on trip completion with odometer delta
- ✅ Revenue tracking per trip
- ✅ Full trip history with filter, sort, and CSV export

---

### 🔧 Maintenance and Expenses

<table>
<tr>
<td width="50%">

**Maintenance**
- ✅ Open work orders per vehicle
- ✅ Vehicle auto-set to `IN_SHOP` on maintenance start
- ✅ Status: `ACTIVE` / `COMPLETED`
- ✅ Maintenance cost tracking per job
- ✅ Automated email on maintenance start and completion

</td>
<td width="50%">

**Expenses**
- ✅ Types: `TOLL` / `MAINTENANCE` / `PARKING` / `PERMIT` / `OTHER`
- ✅ Linked to both vehicle and trip
- ✅ Date-filtered summaries
- ✅ Per-vehicle cost breakdown
- ✅ Feeds into fuel efficiency and cost analytics

</td>
</tr>
</table>

---

### 📊 Dashboard and Analytics

- ✅ **Role-specific KPI widgets** — each role sees only what is relevant
- ✅ Fleet utilization percentage (`ON_TRIP` / non-retired total)
- ✅ Vehicle type distribution chart (SVG Donut)
- ✅ Maintenance cost trend (last 6 months bar chart)
- ✅ Top 5 highest total-cost vehicles
- ✅ Open maintenance work orders widget
- ✅ MiniSparkline components for time-series trends
- ✅ Document compliance alert panel (Fleet Manager + Safety Officer)

---

### 📑 Reports and Data Export

- ✅ **Fuel efficiency by vehicle** — km/L computed server-side
- ✅ **Operational cost by vehicle** — fuel + maintenance combined
- ✅ **Driver performance** — trips completed, distance, safety score
- ✅ **Date range filtering** on all report queries
- ✅ **CSV export** for all reports and data tables via custom `useExport` hook
- ✅ MetricBar horizontal comparison charts

---

## 🏗️ System Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                                │
│      React 19  │  Vite 8  │  Lucide Icons  │  Vanilla CSS          │
│                                                                    │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│   │ 10 Page      │  │ 7 Shared     │  │ Hooks: useExport,    │   │
│   │ Components   │  │ Components   │  │ useSortableData      │   │
│   └──────────────┘  └──────────────┘  └──────────────────────┘   │
└───────────────────────────────┬────────────────────────────────────┘
                                │  REST API — Bearer JWT
                                ▼
┌────────────────────────────────────────────────────────────────────┐
│                        BACKEND LAYER                               │
│      Express.js  │  Node.js ≥18  │  JWT Auth  │  Multer Uploads    │
│                                                                    │
│  ┌────────────┐  ┌────────────┐  ┌──────────────┐  ┌──────────┐  │
│  │    Auth    │  │    RBAC    │  │  10 Route    │  │  Email   │  │
│  │ Middleware │  │ Middleware │  │  Handlers    │  │ Service  │  │
│  └────────────┘  └────────────┘  └──────────────┘  └──────────┘  │
└───────────────────────────────┬────────────────────────────────────┘
                                │  pg — native PostgreSQL driver
                                ▼
┌────────────────────────────────────────────────────────────────────┐
│                        DATA LAYER                                  │
│   PostgreSQL  │  8 Tables  │  7 ENUMs  │  14 Optimized Indexes     │
│                                                                    │
│   users  │  vehicles  │  drivers  │  trips  │  maintenance_logs   │
│   fuel_logs  │  expenses  │  vehicle_documents                     │
└────────────────────────────────────────────────────────────────────┘
                                │
                    ┌───────────┴──────────┐
                    │    File Storage      │
                    │  /uploads/           │
                    │  vehicle_documents/  │
                    │  (local disk, 10MB)  │
                    └──────────────────────┘
```

---

## 🔄 Data Flow and Lifecycle

### Trip Dispatch Sequence

```mermaid
sequenceDiagram
    participant D as Dispatcher
    participant API as Express API
    participant DB as PostgreSQL
    participant Mail as Nodemailer

    D->>API: POST /api/trips (create DRAFT)
    API->>DB: Insert trip, validate cargo vs capacity
    DB-->>API: Trip created — status DRAFT
    API-->>D: 201 Created

    D->>API: PATCH /api/trips/:id/dispatch
    API->>DB: Set DISPATCHED, vehicle=ON_TRIP, driver=ON_TRIP
    API->>Mail: sendTripDispatchedEmail to driver
    Mail-->>D: Driver notified via email
    API-->>D: 200 OK

    D->>API: PATCH /api/trips/:id/complete (odometer + fuel)
    API->>DB: Set COMPLETED, update odometer, insert fuel_log
    DB->>DB: vehicle → AVAILABLE, driver → AVAILABLE
    API->>Mail: sendTripCompletedEmail to dispatcher
    API-->>D: 200 OK with updated trip
```

### Document Compliance Alert Flow

```mermaid
flowchart LR
    A[vehicle_documents\ntable] -->|Dashboard loads| B[GET /api/vehicles/\ndocuments/alerts]
    B --> C{Expiry check}
    C -->|expiry is past| D[EXPIRED]
    C -->|within 30 days| E[EXPIRING_SOON]
    C -->|more than 30 days| F[VALID — filtered out]
    D --> G[DocAlertsPanel\non Dashboard]
    E --> G
    G -->|Visible to Fleet Manager\nand Safety Officer only| H[User sees alert]
```

---

## 👥 Roles and Permissions

### Role Hierarchy

```mermaid
graph TD
    ADMIN["🔑 ADMIN\nFull system access\nBypasses all role checks"]
    FM["📋 FLEET_MANAGER\nFleet and vehicle oversight\nCannot manage ADMIN users"]
    DI["🗺️ DISPATCHER\nTrip creation and dispatch\nDriver coordination"]
    SO["🛡️ SAFETY_OFFICER\nCompliance monitoring\nDocument alerts access"]
    FA["💰 FINANCIAL_ANALYST\nExpense and cost reports\nFuel analytics"]
    DR["🚌 DRIVER\nSelf-service portal only\nOwn trip history"]

    ADMIN --> FM
    ADMIN --> DI
    ADMIN --> SO
    ADMIN --> FA
    ADMIN --> DR

    style ADMIN fill:#e74c3c,stroke:#c0392b,color:#fff
    style FM fill:#3498db,stroke:#2980b9,color:#fff
    style DI fill:#2ecc71,stroke:#27ae60,color:#fff
    style SO fill:#f39c12,stroke:#e67e22,color:#000
    style FA fill:#9b59b6,stroke:#8e44ad,color:#fff
    style DR fill:#1abc9c,stroke:#16a085,color:#fff
```

### Permission Matrix

| Feature | ADMIN | Fleet Mgr | Dispatcher | Safety Officer | Fin. Analyst | Driver |
|---------|:-----:|:---------:|:----------:|:--------------:|:------------:|:------:|
| Manage all users | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| View users (non-admin) | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Register vehicles | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Upload vehicle docs | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| View document alerts | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Manage drivers | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Create and dispatch trips | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Complete and cancel trips | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| View own trips (portal) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Log maintenance | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Log expenses | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| View full reports | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| Export CSV | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

---

## 📧 Automated Email Notifications

TransitOps sends **7 types** of beautifully HTML-templated email notifications via **Gmail SMTP (nodemailer, port 465 SSL)** — every email uses a consistent branded header and structured info-boxes with status badges.

| # | Trigger Event | Recipient | Sent Information |
|---|--------------|-----------|-----------------|
| 1 | 🎉 New user account created | New user | Credentials, email, role badge |
| 2 | 🚛 Trip dispatched | Assigned driver | Trip code, route, cargo weight, vehicle |
| 3 | ✅ Trip completed | Dispatcher / Manager | Distance travelled, fuel consumed, odometer |
| 4 | ❌ Trip cancelled | Dispatcher / Manager | Route, cargo — resources released |
| 5 | 🚫 Driver suspended | Admin / Safety Officer | Driver name, license, safety score |
| 6 | 🔧 Maintenance started | Fleet Manager | Vehicle, type, estimated cost |
| 7 | ✅ Maintenance completed | Fleet Manager | Vehicle back in service, total cost |

> All emails share a `layout()` wrapper rendering the TransitOps gold-on-dark brand, status badges, and an info-box summary card.

---

## 📄 Vehicle Document Compliance

Each vehicle can carry **5 types of mandatory regulatory documents**, all tracked with real-time expiry-based status:

| Document Type | Purpose |
|--------------|---------|
| **RC Book** | Vehicle Registration Certificate |
| **PUC Certificate** | Pollution Under Control |
| **Insurance Policy** | Validity of vehicle insurance |
| **Permits** | Route or commercial operating permit |
| **Fitness Certificate** | Roadworthiness certification |

**Status Logic (computed server-side on every API response):**

```
expiry_date < today              →  EXPIRED        (red)
expiry_date <= today + 30 days   →  EXPIRING_SOON  (amber)
expiry_date > today + 30 days    →  VALID           (green, filtered from alerts)
```

- Documents stored at `backend/uploads/vehicle_documents/`
- Accepted formats: **PDF, JPG, JPEG, PNG, DOC, DOCX** — max **10 MB**
- Alert endpoint `GET /api/vehicles/documents/alerts` returns only non-VALID docs
- Panel visible to **Fleet Manager** and **Safety Officer** roles only

---

## 🛠️ Tech Stack

### Backend

| Technology | Version | Role |
|-----------|---------|------|
| **Node.js** | ≥ 18.0.0 | Runtime |
| **Express.js** | ^4.19.2 | Web framework |
| **PostgreSQL** | Latest | Primary relational database |
| **pg** | ^8.11.5 | Native PostgreSQL driver (no ORM) |
| **jsonwebtoken** | ^9.0.2 | JWT auth token generation and verification |
| **bcryptjs** | ^2.4.3 | Password hashing (10 salt rounds) |
| **multer** | ^2.2.0 | Multipart file upload handling |
| **nodemailer** | ^9.0.3 | Gmail SMTP email (SSL port 465) |
| **dotenv** | ^16.4.5 | Environment variable management |
| **cors** | ^2.8.5 | Cross-origin request support |
| **Jest + Supertest** | ^29.7.0 | Integration testing |

### Frontend

| Technology | Version | Role |
|-----------|---------|------|
| **React** | ^19.2.7 | UI component framework |
| **Vite** | ^8.1.1 | Build tool and HMR dev server |
| **Lucide React** | ^1.24.0 | Consistent SVG icon library |
| **Vanilla CSS** | — | Custom styling (no framework bloat) |
| **oxlint** | ^1.71.0 | Fast JavaScript linter |

---

## 📦 Installation and Setup

### Prerequisites

- **Node.js** ≥ 18.0.0
- **PostgreSQL** ≥ 14.0 (running locally or via Docker)
- **Gmail account** with an App Password configured (for email notifications)

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/yourusername/TransitOps-odoo.git
cd TransitOps-odoo
```

---

### Step 2 — Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
# PostgreSQL Connection
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/transitops

# JWT
JWT_SECRET=your_super_secret_key_minimum_32_characters

# Gmail SMTP (use an App Password — not your account password)
SMTP_USER=youremail@gmail.com
SMTP_PASS=your_16_char_app_password

# Server
PORT=3000
NODE_ENV=development
```

Seed the database (creates all tables, ENUMs, indexes, and demo data):

```bash
npm run seed
```

Start the backend:

```bash
npm run dev      # Development — auto-restarts with node --watch
npm start        # Production
```

Backend live at: `http://localhost:3000`

---

### Step 3 — Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

Frontend live at: `http://localhost:5173`

---

### Step 4 — Default Seed Credentials

All seeded accounts use the password: **`Password@123`**

| Role | Email | Portal Access |
|------|-------|---------------|
| **ADMIN** | `admin@transitops.com` | Full system access |
| **Fleet Manager** | `manager@transitops.com` | Fleet, vehicles, compliance |
| **Dispatcher** | `dispatcher@transitops.com` | Trips and driver coordination |
| **Safety Officer** | `safety@transitops.com` | Compliance, driver safety |
| **Financial Analyst** | `analyst@transitops.com` | Expenses, reports, export |
| **Driver** | `driver@transitops.com` | Self-service portal only (linked to "Alex") |

---

## 🗄️ Database Schema

### Entity Relationship Overview

```mermaid
erDiagram
    users {
        int id PK
        varchar name
        varchar email
        varchar password_hash
        user_role role
        user_status status
        int driver_id FK
    }

    vehicles {
        int id PK
        varchar registration_number
        varchar name
        varchar model
        varchar type
        numeric maximum_load_capacity
        numeric current_odometer
        numeric acquisition_cost
        varchar region
        vehicle_status status
    }

    drivers {
        int id PK
        varchar name
        varchar license_number
        varchar license_category
        date license_expiry_date
        varchar contact_number
        int safety_score
        driver_status status
    }

    trips {
        int id PK
        varchar trip_code
        varchar source
        varchar destination
        int vehicle_id FK
        int driver_id FK
        numeric cargo_weight
        numeric planned_distance
        numeric fuel_consumed
        numeric revenue
        trip_status status
    }

    maintenance_logs {
        int id PK
        int vehicle_id FK
        varchar maintenance_type
        date start_date
        date end_date
        numeric maintenance_cost
        maintenance_status status
    }

    fuel_logs {
        int id PK
        int vehicle_id FK
        int trip_id FK
        numeric fuel_quantity_liters
        numeric fuel_cost
        date fuel_date
        numeric odometer_reading
    }

    expenses {
        int id PK
        int vehicle_id FK
        int trip_id FK
        expense_type expense_type
        numeric amount
        date expense_date
    }

    vehicle_documents {
        int id PK
        int vehicle_id FK
        varchar document_type
        varchar document_number
        date issue_date
        date expiry_date
        varchar file_name
        varchar file_path
    }

    vehicles ||--o{ trips : "assigned to"
    drivers  ||--o{ trips : "drives"
    vehicles ||--o{ maintenance_logs : "serviced via"
    vehicles ||--o{ fuel_logs : "fueled via"
    vehicles ||--o{ expenses : "incurs"
    vehicles ||--o{ vehicle_documents : "has docs"
    trips    ||--o{ fuel_logs : "generates"
    trips    ||--o{ expenses : "links to"
    users    ||--o| drivers : "linked to"
```

### PostgreSQL ENUMs

| ENUM Name | Values |
|-----------|--------|
| `user_role` | `FLEET_MANAGER`, `DISPATCHER`, `SAFETY_OFFICER`, `FINANCIAL_ANALYST`, `DRIVER`, `ADMIN` |
| `user_status` | `ACTIVE`, `INACTIVE` |
| `vehicle_status` | `AVAILABLE`, `ON_TRIP`, `IN_SHOP`, `RETIRED` |
| `driver_status` | `AVAILABLE`, `ON_TRIP`, `OFF_DUTY`, `SUSPENDED` |
| `trip_status` | `DRAFT`, `DISPATCHED`, `COMPLETED`, `CANCELLED` |
| `maintenance_status` | `ACTIVE`, `COMPLETED` |
| `expense_type` | `TOLL`, `MAINTENANCE`, `PARKING`, `PERMIT`, `OTHER` |

---

## 📡 API Reference

> All protected routes require: `Authorization: Bearer <jwt_token>`

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `POST` | `/api/auth/login` | Login and receive JWT | ❌ |
| `POST` | `/api/auth/register` | Register new user account | ✅ (Admin) |
| `GET` | `/api/auth/me` | Get current session user | ✅ |

### Vehicles

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/api/vehicles` | List all vehicles with filter/sort | ✅ |
| `POST` | `/api/vehicles` | Register a new vehicle | ✅ (Manager+) |
| `GET` | `/api/vehicles/:id` | Get vehicle details | ✅ |
| `PUT` | `/api/vehicles/:id` | Update vehicle record | ✅ (Manager+) |
| `DELETE` | `/api/vehicles/:id` | Remove vehicle | ✅ (Admin) |

### Vehicle Documents

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/api/vehicles/documents/alerts` | Get expired or expiring documents | ✅ (Manager, Safety) |
| `GET` | `/api/vehicles/:id/documents` | List all documents for a vehicle | ✅ (non-Driver) |
| `POST` | `/api/vehicles/:id/documents` | Upload a new compliance document | ✅ (Manager, Safety) |
| `PUT` | `/api/vehicles/:id/documents/:docId` | Update document metadata or file | ✅ (Manager, Safety) |
| `DELETE` | `/api/vehicles/:id/documents/:docId` | Delete a document | ✅ (Manager+) |

### Drivers

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/api/drivers` | List drivers with search, filter, sort | ✅ |
| `POST` | `/api/drivers` | Register a driver | ✅ (Manager+) |
| `GET` | `/api/drivers/:id` | Driver profile and details | ✅ |
| `PUT` | `/api/drivers/:id` | Update driver (triggers email if suspended) | ✅ (Manager+) |
| `DELETE` | `/api/drivers/:id` | Remove driver record | ✅ (Admin) |

### Trips

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/api/trips` | List trips with filter and sort | ✅ |
| `POST` | `/api/trips` | Create a draft trip | ✅ (Dispatcher+) |
| `GET` | `/api/trips/:id` | Trip details | ✅ |
| `PATCH` | `/api/trips/:id/dispatch` | Dispatch trip — locks resources, emails driver | ✅ (Dispatcher+) |
| `PATCH` | `/api/trips/:id/complete` | Complete — auto fuel log, frees resources | ✅ (Dispatcher+) |
| `PATCH` | `/api/trips/:id/cancel` | Cancel — releases vehicle and driver | ✅ (Dispatcher+) |

### Maintenance

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/api/maintenance` | List maintenance logs | ✅ |
| `POST` | `/api/maintenance` | Create work order, vehicle → IN_SHOP | ✅ (Manager, Safety) |
| `PUT` | `/api/maintenance/:id` | Update or close work order | ✅ (Manager, Safety) |

### Expenses

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/api/expenses` | List expenses with filter | ✅ |
| `POST` | `/api/expenses` | Log a new expense entry | ✅ |
| `DELETE` | `/api/expenses/:id` | Remove an expense | ✅ (Manager+) |

### Dashboard and Reports

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/api/dashboard` | Role-specific KPIs and chart data | ✅ |
| `GET` | `/api/reports/analytics` | Fuel efficiency, cost, driver performance | ✅ (Manager, Safety, Analyst) |
| `GET` | `/api/reports/csv/:type` | Export report data as CSV | ✅ |

### Users

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/api/users` | List users (ADMIN sees all; FM sees non-admin) | ✅ (Manager+) |
| `POST` | `/api/users` | Create user + send welcome email | ✅ (Admin) |
| `PUT` | `/api/users/:id` | Update user record | ✅ (Admin) |
| `DELETE` | `/api/users/:id` | Delete user (cannot delete ADMIN accounts) | ✅ (Admin) |

---

## 📂 Project Structure

```
TransitOps-odoo/
│
├── 📁 backend/
│   ├── server.js                     # Entry point — binds Express app to port
│   ├── package.json
│   ├── .env                          # Environment variables (not committed)
│   └── src/
│       ├── app.js                    # Express setup, middleware, route mounting
│       ├── config/
│       │   └── database.js           # PostgreSQL connection pool
│       ├── middleware/
│       │   ├── auth.js               # JWT verification + role authorization
│       │   └── errorHandler.js       # Global Express error handler
│       ├── routes/
│       │   ├── auth.js               # Login and registration
│       │   ├── vehicles.js           # Fleet CRUD
│       │   ├── vehicleDocuments.js   # Compliance document management + file upload
│       │   ├── drivers.js            # Driver management + suspension email
│       │   ├── trips.js              # Full trip lifecycle + email triggers
│       │   ├── maintenance.js        # Work orders + email triggers
│       │   ├── expenses.js           # Cost tracking
│       │   ├── dashboard.js          # Role-specific KPI aggregation
│       │   ├── reports.js            # Analytics and CSV export
│       │   └── users.js              # User management (RBAC-enforced)
│       └── utils/
│           ├── email.js              # 7 branded email templates via nodemailer
│           └── seed.js               # Full database seeder
│
├── 📁 frontend/
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx                  # React root mount point
│       ├── App.jsx                   # Router configuration + auth context
│       ├── api.js                    # Axios API client with JWT interceptor
│       ├── index.css                 # Global CSS variables and dark theme
│       ├── context/
│       │   └── AuthContext.jsx       # Auth state and session provider
│       ├── hooks/
│       │   ├── useExport.js          # CSV export hook used across all tables
│       │   └── useSortableData.js    # Reusable table sort state hook
│       ├── components/
│       │   ├── Sidebar.jsx           # Navigation sidebar (role-aware links)
│       │   ├── Header.jsx            # Top bar with user info and logout
│       │   ├── DonutChart.jsx        # SVG donut chart (vehicle type distribution)
│       │   ├── MetricBar.jsx         # Horizontal bar comparison chart
│       │   ├── MiniSparkline.jsx     # Inline time-series trend sparkline
│       │   ├── SortHeader.jsx        # Clickable sortable column header
│       │   └── ExportModal.jsx       # Export format selector dialog
│       └── pages/
│           ├── Login.jsx             # Authentication page
│           ├── Dashboard.jsx         # Role-based KPI hub + document alerts
│           ├── Vehicles.jsx          # Fleet registry + document management modal
│           ├── Drivers.jsx           # Driver roster + safety scores + filters
│           ├── DriverPortal.jsx      # Driver self-service — own trip and profile
│           ├── Trips.jsx             # Trip management — create, dispatch, complete
│           ├── Maintenance.jsx       # Work order tracking
│           ├── Expenses.jsx          # Expense logging and history
│           ├── Reports.jsx           # Analytics reports and CSV export
│           └── Users.jsx             # User management (Admin only)
│
└── 📄 README.md
```

---

## 🔐 Security

| Layer | Implementation |
|-------|---------------|
| **Password Hashing** | `bcryptjs` — 10 salt rounds on every stored password |
| **Authentication** | JWT Bearer tokens in the `Authorization` header |
| **Role Enforcement** | `authorizeRoles()` middleware applied to every protected route |
| **ADMIN Superuser** | ADMIN role bypasses `authorizeRoles` — full system access |
| **Cross-Role Data Isolation** | `FLEET_MANAGER` cannot read, update, or delete ADMIN user records at the query level |
| **Driver Isolation** | DRIVER role is blocked from vehicle documents and other driver profiles |
| **File Type Whitelist** | Extension and MIME validation on all document uploads |
| **File Size Cap** | 10 MB enforced by multer before files reach the filesystem |
| **SQL Injection Prevention** | Parameterized queries (`$1`, `$2`) throughout — no raw string interpolation |
| **CORS** | Configured via the `cors` Express middleware |
| **Forbidden on Invalid Token** | Returns `403 Forbidden` with a clear error message — no details leaked |

---

## 🧪 Testing

The backend includes integration tests using **Jest** and **Supertest**:

```bash
cd backend
npm test                     # Run all test suites
npm test -- --coverage       # With code coverage report
```

Test coverage includes:
- ✅ Authentication flow (login, invalid credentials, token expiry)
- ✅ Vehicle, driver, and trip CRUD operations
- ✅ Role-based access enforcement (403 on unauthorized requests)
- ✅ Trip lifecycle state transitions
- ✅ Document upload and compliance status computation

---

## 🚀 Deployment

### Pre-Deployment Checklist

- [ ] `DATABASE_URL` points to production PostgreSQL instance
- [ ] `JWT_SECRET` is a strong, unique random string (32+ characters)
- [ ] `SMTP_USER` / `SMTP_PASS` configured with a Gmail App Password
- [ ] `NODE_ENV=production` set in environment
- [ ] Uploads directory is writable and persisted (use a volume for cloud deployments)

### Production Commands

```bash
# Backend
cd backend
npm start

# Frontend — build static files then deploy /dist
cd frontend
npm run build
```

### Recommended Platforms

| Platform | Backend | Frontend | PostgreSQL |
|----------|:-------:|:--------:|:----------:|
| **Railway** | ✅ | ✅ | ✅ Plugin |
| **Render** | ✅ | ✅ | ✅ Managed |
| **Fly.io** | ✅ | ✅ | ✅ Fly Postgres |
| **Vercel** | ✅ Serverless | ✅ | ❌ use Supabase |
| **DigitalOcean App Platform** | ✅ | ✅ | ✅ Managed |

---

## 🔮 Roadmap

| Phase | Feature | Status |
|-------|---------|--------|
| ✅ Phase 1 | Core Fleet, Driver, and Trip Management | **Complete** |
| ✅ Phase 2 | Role-Based Access Control (6 roles) | **Complete** |
| ✅ Phase 3 | Automated Email Notifications (7 triggers) | **Complete** |
| ✅ Phase 4 | Vehicle Document Compliance Management | **Complete** |
| ✅ Phase 5 | Analytics, Reports, and CSV Export | **Complete** |
| ✅ Phase 6 | Driver Safety Scores and Self-Service Portal | **Complete** |
| 🔮 Phase 7 | Real-time GPS tracking integration | Planned |
| 🔮 Phase 8 | Mobile application (React Native) | Planned |
| 🔮 Phase 9 | Live notifications via WebSockets | Planned |
| 🔮 Phase 10 | AI-powered predictive maintenance | Planned |
| 🔮 Phase 11 | Multi-tenant organization support | Planned |

---

## 🤝 Contributing

Contributions are welcome. To get started:

1. **Fork** this repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** with a descriptive message following Conventional Commits:
   ```bash
   git commit -m "feat: add GPS tracking integration"
   ```
4. **Push** your branch and open a Pull Request

### Commit Convention

| Prefix | Purpose |
|--------|---------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `refactor:` | Code restructuring (no feature or fix) |
| `chore:` | Build, tooling, or dependency updates |

---

<div align="center">

## ⭐ Star this repo if TransitOps helped you!

<br/>

**Built with ❤️ for smarter, safer, more efficient transport operations.**

<br/>

[🐛 Report a Bug](https://github.com/yourusername/TransitOps-odoo/issues) &nbsp;·&nbsp;
[💡 Request a Feature](https://github.com/yourusername/TransitOps-odoo/issues) &nbsp;·&nbsp;
[📖 Jump to API Reference](#-api-reference)

<br/>

<img src="https://img.shields.io/badge/Made_with-Node.js_%2B_React-339933?style=for-the-badge&logo=node.js&logoColor=white" />
&nbsp;
<img src="https://img.shields.io/badge/Database-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" />

</div>

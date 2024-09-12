# GRIVANCE MANAGEMENT SYSTEM 

## Project Overview

The Grievance Management System consists of three main roles: **User**, **Supervisor**, and **Assignee**. Each role has specific views and data flows to facilitate the efficient handling of grievances.

## Roles and Responsibilities

### User Role

- **Functionality**: Users can raise complaints or queries related to various categories.
- **View**: A user-friendly interface for submitting grievances and viewing status updates.

### Supervisor Role

- **Functionality**: Supervisors review submitted grievances, categorize them, and assign them to the appropriate assignees.
- **View**: An interface for managing incoming grievances, filtering by category, and assigning tasks to assignees.

### Assignee Role

- **Functionality**: Assignees receive assigned grievances, work on resolving them, and update the status accordingly.
- **View**: A dashboard for viewing assigned grievances, updating statuses, and providing resolution feedback.

## System Architecture

- **Frontend**: ReactJS will be used to develop an intuitive user interface for all three roles. Each role will have specific components tailored to their functionality.
- **Backend**: Spring Boot and Java will be used to handle the business logic, including grievance submission, categorization, assignment, and resolution tracking.
- **Database**: PostgreSQL will serve as the database for storing user information, grievances, categories, assignments, and status updates.

## Data Flow

### User Submission

1. Users submit grievances via the React frontend.
2. The submission is sent to the Spring Boot backend and stored in the PostgreSQL database.

### Supervisor Assignment

1. Supervisors access the list of submitted grievances via their interface.
2. They assign grievances to the appropriate assignees.
3. The assignments are updated in the PostgreSQL database.

### Assignee Resolution

1. Assignees receive notifications of new assignments.
2. They access the grievances through their dashboard and work on resolving them.
3. Assignees update the status of the grievances accordingly.

## Technology Stack

- **Frontend**: ReactJS
- **Backend**: Spring Boot, Java
- **Database**: PostgreSQL

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/arunar1/grievance-management-system.git

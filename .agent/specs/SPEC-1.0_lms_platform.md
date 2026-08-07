# SPEC-1.0: AI LMS & Automation Platform

## 1. Feature Specification
- **Title**: AI Automation LMS System (React + Cloudscape + Supabase)
- **Target Audience**: Beginners, Office Workers, Marketers, Online Sellers
- **Golden Path Constraint**: 0 error tolerance, 1-Click Copy / Direct Download, < 10 words per bullet step.

## 2. Gherkin Acceptance Scenarios
```gherkin
Scenario: Student copies Mega-Prompt in 1 Click
  Given the student is viewing Session 1 in Student Portal
  When the student clicks "Copy Mega-Prompt"
  Then the text is copied to clipboard and a Cloudscape Alert confirmation appears.

Scenario: Student downloads n8n JSON workflow
  Given the student is viewing Session 3 in Student Portal
  When the student clicks "Download n8n JSON Workflow"
  Then a valid .json file triggers browser download.

Scenario: Teacher updates lesson content online
  Given the teacher opens Admin Dashboard at /admin
  When the teacher updates the Mega-Prompt for Session 1 and clicks Save
  Then the Supabase database updates and Student Portal reflects changes immediately.
```

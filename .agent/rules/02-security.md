# 🛡️ Rule 02: Security & Package Whitelist

## Allowed Package Whitelist
- `@cloudscape-design/components`
- `@cloudscape-design/global-styles`
- `@cloudscape-design/design-tokens`
- `@supabase/supabase-js`
- `react`
- `react-dom`
- `react-router-dom`
- `lucide-react`

## Guardrails
1. Never hardcode private API keys in client-side repositories. Use `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
2. Sanitize user inputs in Lead Capture form before submitting to database.

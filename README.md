# CS407 Final Project Client (Web)

## Introduction

This is the web client for the CS407 Final Project, designed specifically for **testing backend APIs** during development. 

### Why Web Client?
- **Memory efficient**: Uses significantly less memory compared to Android emulator
- **Development friendly**: Faster iteration and debugging for backend API testing
- **Cross-platform**: Works on any system with a web browser

### Current Progress
- ✅ Most basic interfaces implemented
- ✅ Basic login authentication system
- ✅ WebSocket connection established
- 🚧 Backend APIs development should proceed in parallel based on these interfaces

For detailed project information, please refer to our [Project Proposal](./CS407_Project_Proposal.pdf).

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Important Note about Next.js 16 Concurrency
Next.js 16 has locking mechanisms that prevent concurrent access. To test multiple users or concurrent scenarios, you need to **clone multiple instances** of this client.

### Recommended Setup for Testing
```bash
# Clone multiple instances for concurrent testing
git clone <repo-url> knot_client_web_A
git clone <repo-url> knot_client_web_B
git clone <repo-url> knot_client_web_C
# ... clone as many as needed for your testing scenarios
```

### Running the Development Server
In each cloned directory, install dependencies and start the server:

```bash
npm install
npm run dev
# or
yarn install && yarn dev
# or
pnpm install && pnpm dev
# or
bun install && bun dev
```

Each instance will run on a different port:
- First instance: [http://localhost:3000](http://localhost:3000)
- Second instance: [http://localhost:3001](http://localhost:3001)
- Third instance: [http://localhost:3002](http://localhost:3002)
- And so on...

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Backend Development Integration

This web client serves as the primary interface for backend API testing. Backend developers should:

1. **Reference the implemented interfaces** in this client for API specifications
2. **Develop APIs in parallel** based on the client's interface requirements
3. **Test with multiple client instances** to simulate concurrent user scenarios
4. **Use WebSocket connections** for real-time features testing

## Project Structure

- `app/_api/` - API integration layer
- `app/_components/` - React components for UI
- `app/_context/` - Context providers (Auth, WebSocket, etc.)
- `app/_style/` - Custom styling

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

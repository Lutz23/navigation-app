

# **Navigation App Prototype**

A prototype of a navigation-based app featuring **menus, tabs, stacks, and product details**. Built with **React**, **TypeScript**, **Expo Go**, **Tailwind CSS**, and tested with **Android Studio**.

---

## **Features**

* **Menu Navigation:**

  * **Tabs + Stack Navigation** with:

    * **Products:** List of articles and their prices
    * **User:** User profile or account information
    * **Settings:** App settings
    * **Open Menu:** Access to additional options
  * **Schedule:** View user schedules or timelines

* **Products Module:**

  * Displays articles with their **title, description, and price**
  * Interactive design using **React Native FlatList**

* **Cross-Platform Support:**

  * Fully tested on Android (via **Android Studio Emulator**) and iOS (Expo Go app)
  * Responsive layout using **Tailwind CSS**

---

## **Tech Stack**

* **React (TypeScript)** – modular components and strong typing
* **Expo Go** – easy development & testing
* **React Navigation** – tabs and stack navigation
* **Tailwind CSS (via NativeWind)** – responsive and utility-first styling
* **Android Studio** – Android emulator for testing

---

## **Installation**

### **1. Clone the repository**

```bash
git clone https://github.com/<your-username>/navigation-app.git
cd navigation-app
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Start the development server**

```bash
npx expo start
```

### **4. Run the app**

* **On a physical device:** Scan the QR code using the **Expo Go** app.
* **On Android emulator:**

  ```bash
  npx expo run:android
  ```
* **On iOS simulator (Mac):**

  ```bash
  npx expo run:ios
  ```

---

## **Project Structure**

```
navigation-app/
├── app/                      # App routing (expo-router)
│   ├── (tabs)/               # Tab navigation
│   │   ├── products.tsx      # Products screen with articles & prices
│   │   ├── user.tsx          # User screen
│   │   ├── settings.tsx      # Settings screen
│   │   └── menu.tsx          # Open menu screen
│   ├── schedule.tsx          # Schedule screen
│   ├── _layout.tsx           # Stack layout for nested navigation
├── components/               # Reusable UI components
├── store/                    # State management
├── assets/                   # Fonts, icons, and images
├── tailwind.config.js        # Tailwind CSS configuration
├── App.tsx                   # Entry point
└── README.md
```

---

## **Example Product Item**

```tsx
import React from 'react';
import { View, Text } from 'react-native';

type Product = { id: string; name: string; price: number };

export const ProductItem = ({ product }: { product: Product }) => (
  <View className="flex-row justify-between p-4 bg-gray-100 rounded-md mb-2">
    <Text className="text-lg font-bold">{product.name}</Text>
    <Text className="text-lg">${product.price.toFixed(2)}</Text>
  </View>
);
```

---

## **Styling with Tailwind CSS**

This app uses **NativeWind (Tailwind for React Native)** for styling:

```bash
npm install nativewind tailwindcss
npx tailwindcss init
```

Example:

```tsx
<View className="bg-white flex-1 p-4">
  <Text className="text-xl font-semibold">Welcome!</Text>
</View>
```

---

## **Future Improvements**

* Add backend support for product management
* Implement user authentication
* Persist user settings & schedule
* Add animations for menu transitions

---

## **License**

This project is licensed under the MIT License.

---

Do you want me to **add navigation diagrams (images) to this README** so the user can visualize the tab + stack structure? Or should I include a **full working `_layout.tsx` with tabs + stack** in TypeScript?

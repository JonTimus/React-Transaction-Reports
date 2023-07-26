import { useState } from "react";
import "./styles.css";
import { TransactionProvider } from "./context/TransactionContext";
import RewardPage from "./pages/RewardPage/RewardPage";
import TransactionPage from "./pages/TransactionPage/TransactionsPage";

const tabs = [
  { title: "Transactions", component: TransactionPage },
  { title: "Rewards", component: RewardPage }
];

export default function App() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="App">
      <TransactionProvider>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              className={tab === activeTab ? "tab-button active" : "tab-button"}
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <main className="tab-container">
          {(() => {
            const Component = activeTab.component;
            return <Component />;
          })()}
        </main>
      </TransactionProvider>
    </div>
  );
}

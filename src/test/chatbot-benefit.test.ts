import { describe, expect, it } from "vitest";
import { chatbotBenefit } from "@/data/site";

describe("Chatbot benefit for agency clients", () => {
  it("is free for agency clients", () => {
    expect(chatbotBenefit.monthlyCostForAgencyClients).toBe(0);
  });

  it("does not limit attendants", () => {
    expect(chatbotBenefit.attendantLimit).toBeNull();
  });
});
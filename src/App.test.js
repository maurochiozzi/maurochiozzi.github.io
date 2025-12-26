import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders loading state initially", async () => {
  render(<App />);
  // App uses Suspense with a CircularProgress fallback which has role="progressbar"
  const loader = screen.getByRole("progressbar");
  expect(loader).toBeInTheDocument();
  await waitFor(() => expect(loader).not.toBeInTheDocument());
});
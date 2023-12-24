import crypto from "crypto";
import { faker } from "@faker-js/faker";

import { LogicException } from "../errors/exceptions";

// Function to generate API key with salt and hash
export function generateApiKey(userId) {
  // Salt for additional security
  const salt = process.env.SECRET; // Replace with a secure random salt

  if (!salt) {
    throw new LogicException(
      "An error occurred in the API key generation function due to an invalid salt value.",
    );
  }

  // Generate a unique UUID for the user
  const userUuid = userId || faker.string.uuid();

  const prefix = `z982i`;

  // Combine user UUID, salt, and prefix
  const dataToHash = `api-key${userUuid}${salt}`;

  // Create a hash using SHA256
  const hash = crypto.createHash("sha256").update(dataToHash).digest("hex");

  // Return the generated API key
  return `${prefix}.${hash}.${userUuid}`;
}

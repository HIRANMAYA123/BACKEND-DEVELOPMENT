// fileManager.js

const fs = require("fs");

const fileName = "data.txt";

console.log("=== File Manager Started ===");

// CREATE FILE
console.log("\n1. Creating file...");

fs.writeFile(fileName, "Hello from Node.js!\n", (err) => {

    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File created successfully.");

    // READ FILE
    console.log("\n2. Reading file...");

    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File Content:");
        console.log(data);

        // UPDATE FILE
        console.log("3. Updating file...");

        fs.appendFile(
            fileName,
            "This line was added using appendFile().\n",
            (err) => {

                if (err) {
                    console.log("Error updating file:", err.message);
                    return;
                }

                console.log("File updated successfully.");

                // READ UPDATED FILE
                fs.readFile(fileName, "utf8", (err, updatedData) => {

                    if (err) {
                        console.log(
                            "Error reading updated file:",
                            err.message
                        );
                        return;
                    }

                    console.log("\nUpdated File Content:");
                    console.log(updatedData);

                    // DELETE FILE
                    console.log("4. Deleting file...");

                    fs.unlink(fileName, (err) => {

                        if (err) {
                            console.log(
                                "Error deleting file:",
                                err.message
                            );
                            return;
                        }

                        console.log("File deleted successfully.");

                        console.log("\n=== File Manager Finished ===");
                    });
                });
            }
        );
    });
});

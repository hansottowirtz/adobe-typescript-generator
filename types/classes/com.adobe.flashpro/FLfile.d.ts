/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * 7.2 includes a C shared library called FLfile that gives 
		 * authors of objects, commands, behaviors, data translators, 
		 * floating panels, and Property inspectors the ability to read 
		 * and write files on the local file system, and access 
		 * information about them.
		 */
		class FLfile extends Adobe.Csawlib.CSHostObject {
			/**
			 * Copies the specified file to the specified URL.
			 * @param {string} OriginalURL the file you want to copy, 
			 * expressed as a file:// URL
			 * @param {string} copyURL the location where you save the 
			 * copied file, expressed as a file:// URL.
			 */
			public copy(OriginalURL: string, copyURL: string): boolean;
			/**
			 * Creates a folder (directory) at the specified location. 
			 * Returns true if the folder was successfully created, false 
			 * otherwise.
			 * @param {string} folderURL The argument is the location of 
			 * the folder you want to create, expressed as a file:// URL.
			 */
			public createFolder(folderURL: string): boolean;
			/**
			 * Tests for the existence of the specified file. Returns true 
			 * if the file exists, false otherwise.
			 * @param {string} fileURL The argument is the file you are 
			 * looking for, expressed as a file:// URL.
			 */
			public exists(fileURL: string): boolean;
			/**
			 * Gets the attributes of the specified file or folder.
			 * Returns a string representing the attributes of the 
			 * specified file or folder, or null if the file or folder does 
			 * not exist. Characters in the string represent the attributes 
			 * as follows:
			 * R is Read Only
			 * D is a Folder (Dir)
			 * H is Hidden (Windows only)
			 * S is a system file or folder (Windows only)
			 * @param {string} fileURL The argument is the file or folder 
			 * for which you want to get attributes, expressed as a file:// 
			 * URL.
			 */
			public getAttributes(fileURL: string): string;
			/**
			 * Gets the time when the file was created. Returns a string 
			 * containing a hexadecimal number that represents the number 
			 * of time units that have elapsed since some base time. The 
			 * exact meaning of time units and base time is 
			 * platform-dependent; in Windows, for example, a time unit is 
			 * 100ns, and the base time is January 1st, 1600.
			 * @param {string} fileURL The argument is the file for which 
			 * you are checking the creation time, expressed as a file:// 
			 * URL.
			 */
			public getCreationDate(fileURL: string): string;
			/**
			 * This function gets the JavaScript object that represents the 
			 * time when the file was created. Returns a JavaScript Date 
			 * object that represents the date and time when the specified 
			 * file was last modified. This date is human readable.
			 * @param {string} fileURL The fileURL argument, which is 
			 * expressed as a file:// URL, is the file for which you are 
			 * checking the creation time.
			 */
			public getCreationDateObj(fileURL: string): any;
			/**
			 * Gets the time when the file was last modified. Returns a 
			 * string containing a hexadecimal number that represents the 
			 * number of time units that have elapsed since some base time. 
			 * The exact meaning of time units and base time is 
			 * platform-dependent; in Windows, for example, a time unit is 
			 * 100ns, and the base time is January 1st, 1600.
			 * @param {string} fileURL The argument is the file for which 
			 * you are checking the last modified time, expressed as a 
			 * file:// URL.
			 */
			public getModificationDate(fileURL: string): string;
			/**
			 * @param {string} fileURL The fileURL argument, which is 
			 * expressed as a file:// URL, is the file for which you are 
			 * checking the creation time.
			 */
			public getModificationDateObj(fileURL: string): string;
			/**
			 * This function gets the size of a specified file. Returns an 
			 * integer that represents the actual size, in bytes, of the 
			 * specified file.
			 * @param {string} fileURL The fileURL argument, which is 
			 * expressed as a file:// URL, is the file for which you are 
			 * checking the size.
			 */
			public getSize(fileURL: string): number;
			/**
			 * Gets a list of the contents of the specified folder. returns 
			 * an array of strings representing the contents of the folder.
			 * @param {string} folderURL The folder for which you want a 
			 * contents list, expressed as a file:// URL plus an optional 
			 * wildcard file mask. Valid wildcards are (matches 1 or more 
			 * characters) and ? (matches a single character). for example: 
			 * @param {string} constraint Must be either "files" (return 
			 * only files) or "directories" (return only directories). If 
			 * omitted, the function returns both files and directories.
			 */
			public listFolder(folderURL: string, constraint: string): any[];
			/**
			 * Returns a platform-independent URI given a platform specific 
			 * path
			 */
			public platformPathToURI(): string;
			/**
			 * Reads the contents of the specified file into a string. 
			 * Returns a string containing the contents of the file, or 
			 * null if the read fails.
			 * @param {string} fileURL The argument is the file you want to 
			 * read, expressed as a file:// URL.
			 */
			public read(fileURL: string): string;
			/**
			 * Delete the specified file or folder. If the folder contains 
			 * files, those files will be deleted as well. Files with the R 
			 * (read-only) attribute cannot be removed. Returns true if the 
			 * operation succeeded, false otherwise.
			 * @param {string} fileURL The argument is the file you want to 
			 * remove, expressed as a file:// URL.
			 */
			public remove(fileURL: string): boolean;
			/**
			 * This function sets the system-level attributes of a 
			 * particular file. returns true if the operation succeeded, 
			 * false otherwise.
			 * @param {string} fileURL The fileURL argument, which is 
			 * expressed as a file:// URL, identifies the file for which 
			 * you are setting the attributes.
			 * @param {string} strAttrs The strAttrs argument specifies the 
			 * system-level attributes for the file that is identified by 
			 * the fileURL argument. The following table describes valid 
			 * attribute values and their meaning:
			 */
			public setAttributes(fileURL: string, strAttrs: string): boolean;
			/**
			 * Returns a platform-specific file path given a file URI path.
			 * @param {string} fileURI 
			 */
			public uriToPlatformPath(fileURI: string): string;
			/**
			 * Writes the specified string to the specified file (as 
			 * UTF-8). If the specified file does not yet exist, it is 
			 * created. Returns true if the string was successfully written 
			 * to the file, false otherwise.
			 * @param {string} fileURL The first argument is the file you 
			 * are writing to, expressed as a file:// URL.
			 * @param {string} text The second argument is the string to be 
			 * written.
			 * @param {string} mode The third argument, if supplied, must 
			 * be "append" . If this argument is omitted, the contents of 
			 * the file are overwritten by the string.
			 */
			public write(fileURL: string, text: string, mode: string): boolean;
		}
	}
}
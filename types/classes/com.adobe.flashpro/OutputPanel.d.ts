/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/** object which represents the Output Panel */
		class OutputPanel extends Adobe.Csawlib.CSHostObject {
			/**
			 * Clears the contents of the Output Panel
			 * @returns {void}
			 */
			public clear(): void;
			/**
			 * Saves the contents of the Output Panel to a local text file, 
			 * in UTF-8 encoding. The local file name is specified as a 
			 * URI. Optionally, the local file may be appended to instead 
			 * of overwritten.  If the URI is invalid or unspecified, an 
			 * error will be reported.
			 * @param {string} fileURI The URI of the local file to write 
			 * the Output Panel's text to
			 * @param {boolean} bAppendToFile If true, the output file is 
			 * appended to,instead of overwritten. If false, the output 
			 * file is overwritten if it already exists. The default if not 
			 * specified is false.
			 * @param {boolean} useSystemEncoding Save the output panel 
			 * text using the system encoding instead of UTF8, and without 
			 * the Byte Order Mark characters at the start of the text.
			 * @returns {void}
			 */
			public save(fileURI: string, bAppendToFile: boolean, useSystemEncoding: boolean): void;
			/**
			 * Adds a line to the contents of the Output Panel, terminated 
			 * by a newline.  Shows the Output Panel if it is not already 
			 * visible.  (Duplicates functionality in fl.trace, but present 
			 * here as well for consistency reasons.)
			 * @param {string} message 
			 * @returns {void}
			 */
			public trace(message: string): void;
		}
	}
}
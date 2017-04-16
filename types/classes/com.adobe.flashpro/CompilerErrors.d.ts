/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * As part of the new error navigation feature, compiler errors 
		 * will get dumped into a separate panel.
		 */
		class CompilerErrors extends Adobe.Csawlib.CSHostObject {
			/**
			 * Clears the list of errors.
			 * @returns {void}
			 */
			public clear(): void;
			/**
			 * indicates if the compile errors panel contains errors, and 
			 * optionally indicates if it contains warnings.
			 * @param {boolean} excludeWarnings if true, warnings should be 
			 * excluded
			 * @returns {boolean}
			 */
			public hasErrors(excludeWarnings: boolean): boolean;
			/**
			 * Saves the list of errors to a local text file, in UTF-8 
			 * encoding. The local file name is specified as a URI. 
			 * Optionally, the local file may be appended to instead of 
			 * overwritten. If the URI is invalid or unspecified, an error 
			 * will be reported.
			 * @param {string} fileURI The URI of the local file to write 
			 * the list of errors to
			 * @param {boolean} bAppendToFile If true, the file is appended 
			 * to,instead of overwritten. If false, the file is overwritten 
			 * if it already exists. The default if not specified is false.
			 * @param {boolean} useSystemEncoding Save the list of errors 
			 * using the system encoding instead of UTF8, and without the 
			 * Byte Order Mark characters at the start of the text.
			 * @param {boolean} verbose added for flash builder workflow
			 * @param {boolean} externalOnly added for flash builder 
			 * workflow
			 * @returns {void}
			 */
			public save(fileURI: string, bAppendToFile: boolean, useSystemEncoding: boolean, verbose: boolean, externalOnly: boolean): void;
		}
	}
}
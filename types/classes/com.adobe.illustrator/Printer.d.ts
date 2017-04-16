/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** an installed printer */
		class Printer extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the printer name
			 * @type {string}
			 */
			public name: string;
			/**
			 * the printer information
			 * @type {Adobe.Illustrator.PrinterInfo}
			 */
			public printerInfo: Adobe.Illustrator.PrinterInfo;
		}
	}
}
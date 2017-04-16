/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** an installed printer */
		class Printer extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the printer name */
			public name: string;
			/** the printer information */
			public printerInfo: Adobe.Illustrator.PrinterInfo;
		}
	}
}
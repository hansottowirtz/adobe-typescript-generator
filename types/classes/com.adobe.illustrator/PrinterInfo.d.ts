/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** printer information */
		class PrinterInfo extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * does the printer support binary printing?
			 * @type {boolean}
			 */
			public binaryPrintingSupport: boolean;
			/**
			 * the printer color capability
			 * @type {Adobe.Illustrator.PrinterColorMode}
			 */
			public colorSupport: Adobe.Illustrator.PrinterColorMode;
			/**
			 * does the printer support custom paper size?
			 * @type {boolean}
			 */
			public customPaperSupport: boolean;
			/**
			 * does the printer support custom paper transverse?
			 * @type {boolean}
			 */
			public customPaperTransverseSupport: boolean;
			/**
			 * the printer default resolution
			 * @type {number}
			 */
			public deviceResolution: number;
			/**
			 * does the printer support InRIP color separation?
			 * @type {boolean}
			 */
			public inRIPSeparationSupport: boolean;
			/**
			 * the printer maximum device resolution
			 * @type {number}
			 */
			public maxDeviceResolution: number;
			/**
			 * custom paper's maximum height
			 * @type {number}
			 */
			public maxPaperHeight: number;
			/**
			 * custom paper's maximum height offset
			 * @type {number}
			 */
			public maxPaperHeightOffset: number;
			/**
			 * custom paper's maximum width
			 * @type {number}
			 */
			public maxPaperWidth: number;
			/**
			 * custom paper's maximum width offset
			 * @type {number}
			 */
			public maxPaperWidthOffset: number;
			/**
			 * custom paper's minimum height
			 * @type {number}
			 */
			public minPaperHeight: number;
			/**
			 * custom paper's minimum height offset
			 * @type {number}
			 */
			public minPaperHeightOffset: number;
			/**
			 * custom paper's minimum width
			 * @type {number}
			 */
			public minPaperWidth: number;
			/**
			 * custom paper's minimum width offset
			 * @type {number}
			 */
			public minPaperWidthOffset: number;
			/**
			 * the list of supported paper sizes
			 * @type {any[]}
			 */
			public paperSizes: any[];
			/**
			 * the PostScript level
			 * @type {Adobe.Illustrator.PrinterPostScriptLevelEnum}
			 */
			public postScriptLevel: Adobe.Illustrator.PrinterPostScriptLevelEnum;
			/**
			 * the printer type
			 * @type {Adobe.Illustrator.PrinterTypeEnum}
			 */
			public printerType: Adobe.Illustrator.PrinterTypeEnum;
		}
	}
}
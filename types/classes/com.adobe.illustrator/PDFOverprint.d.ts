/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PDFOverprint extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.PDFOverprint}
			 * @readonly
			 */
			public static readonly DISCARDPDFOVERPRINT: Adobe.Illustrator.PDFOverprint;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PDFOverprint}
			 * @readonly
			 */
			public static readonly PRESERVEPDFOVERPRINT: Adobe.Illustrator.PDFOverprint;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
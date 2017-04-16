/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.DocumentType}
			 * @readonly
			 */
			public static readonly EPS: Adobe.Illustrator.DocumentType;
			/**
			 * @type {Adobe.Illustrator.DocumentType}
			 * @readonly
			 */
			public static readonly FXG: Adobe.Illustrator.DocumentType;
			/**
			 * @type {Adobe.Illustrator.DocumentType}
			 * @readonly
			 */
			public static readonly ILLUSTRATOR: Adobe.Illustrator.DocumentType;
			/**
			 * @type {Adobe.Illustrator.DocumentType}
			 * @readonly
			 */
			public static readonly PDF: Adobe.Illustrator.DocumentType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
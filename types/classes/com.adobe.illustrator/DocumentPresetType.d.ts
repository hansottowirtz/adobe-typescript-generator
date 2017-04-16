/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentPresetType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.DocumentPresetType}
			 * @readonly
			 */
			public static readonly BasicCMYK: Adobe.Illustrator.DocumentPresetType;
			/**
			 * @type {Adobe.Illustrator.DocumentPresetType}
			 * @readonly
			 */
			public static readonly BasicRGB: Adobe.Illustrator.DocumentPresetType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.DocumentPresetType}
			 * @readonly
			 */
			public static readonly Mobile: Adobe.Illustrator.DocumentPresetType;
			/**
			 * @type {Adobe.Illustrator.DocumentPresetType}
			 * @readonly
			 */
			public static readonly Print: Adobe.Illustrator.DocumentPresetType;
			/**
			 * @type {Adobe.Illustrator.DocumentPresetType}
			 * @readonly
			 */
			public static readonly Video: Adobe.Illustrator.DocumentPresetType;
			/**
			 * @type {Adobe.Illustrator.DocumentPresetType}
			 * @readonly
			 */
			public static readonly Web: Adobe.Illustrator.DocumentPresetType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
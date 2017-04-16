/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class LibraryType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.LibraryType}
			 * @readonly
			 */
			public static readonly BRUSHES: Adobe.Illustrator.LibraryType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.LibraryType}
			 * @readonly
			 */
			public static readonly GRAPHICSTYLES: Adobe.Illustrator.LibraryType;
			/**
			 * @type {Adobe.Illustrator.LibraryType}
			 * @readonly
			 */
			public static readonly ILLUSTRATORARTWORK: Adobe.Illustrator.LibraryType;
			/**
			 * @type {Adobe.Illustrator.LibraryType}
			 * @readonly
			 */
			public static readonly SWATCHES: Adobe.Illustrator.LibraryType;
			/**
			 * @type {Adobe.Illustrator.LibraryType}
			 * @readonly
			 */
			public static readonly SYMBOLS: Adobe.Illustrator.LibraryType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
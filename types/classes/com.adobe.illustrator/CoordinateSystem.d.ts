/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class CoordinateSystem extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.CoordinateSystem}
			 * @readonly
			 */
			public static readonly ARTBOARDCOORDINATESYSTEM: Adobe.Illustrator.CoordinateSystem;
			/**
			 * @type {Adobe.Illustrator.CoordinateSystem}
			 * @readonly
			 */
			public static readonly DOCUMENTCOORDINATESYSTEM: Adobe.Illustrator.CoordinateSystem;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
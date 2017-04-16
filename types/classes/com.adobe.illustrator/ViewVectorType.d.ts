/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Controls the type of vector view. */
		class ViewVectorType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * No vectors.
			 * @type {Adobe.Illustrator.ViewVectorType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWVECTORNOTRACINGRESULT: Adobe.Illustrator.ViewVectorType;
			/**
			 * View just the paths.
			 * @type {Adobe.Illustrator.ViewVectorType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWVECTOROUTLINES: Adobe.Illustrator.ViewVectorType;
			/**
			 * View paths and transparent fills.
			 * @type {Adobe.Illustrator.ViewVectorType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWVECTOROUTLINESWITHTRACING: Adobe.Illustrator.ViewVectorType;
			/**
			 * View artwork.
			 * @type {Adobe.Illustrator.ViewVectorType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWVECTORTRACINGRESULT: Adobe.Illustrator.ViewVectorType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
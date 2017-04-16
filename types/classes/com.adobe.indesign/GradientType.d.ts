/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GradientType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for LINEAR. A linear gradient.
			 * @type {Adobe.Indesign.GradientType}
			 * @readonly
			 */
			public static readonly linear: Adobe.Indesign.GradientType;
			/**
			 * A linear gradient.
			 * @type {Adobe.Indesign.GradientType}
			 * @readonly
			 */
			public static readonly LINEAR: Adobe.Indesign.GradientType;
			/**
			 * Alias for RADIAL. A radial gradient.
			 * @type {Adobe.Indesign.GradientType}
			 * @readonly
			 */
			public static readonly radial: Adobe.Indesign.GradientType;
			/**
			 * A radial gradient.
			 * @type {Adobe.Indesign.GradientType}
			 * @readonly
			 */
			public static readonly RADIAL: Adobe.Indesign.GradientType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
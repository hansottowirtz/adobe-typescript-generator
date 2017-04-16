/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GradientType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for LINEAR. A linear gradient.
			 * @type {Adobe.Incopy.GradientType}
			 * @readonly
			 */
			public static readonly linear: Adobe.Incopy.GradientType;
			/**
			 * A linear gradient.
			 * @type {Adobe.Incopy.GradientType}
			 * @readonly
			 */
			public static readonly LINEAR: Adobe.Incopy.GradientType;
			/**
			 * Alias for RADIAL. A radial gradient.
			 * @type {Adobe.Incopy.GradientType}
			 * @readonly
			 */
			public static readonly radial: Adobe.Incopy.GradientType;
			/**
			 * A radial gradient.
			 * @type {Adobe.Incopy.GradientType}
			 * @readonly
			 */
			public static readonly RADIAL: Adobe.Incopy.GradientType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
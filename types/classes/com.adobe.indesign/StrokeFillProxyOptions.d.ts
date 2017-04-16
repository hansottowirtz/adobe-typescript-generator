/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StrokeFillProxyOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for FILL. Fill proxy is active.
			 * @type {Adobe.Indesign.StrokeFillProxyOptions}
			 * @readonly
			 */
			public static readonly fill: Adobe.Indesign.StrokeFillProxyOptions;
			/**
			 * Fill proxy is active.
			 * @type {Adobe.Indesign.StrokeFillProxyOptions}
			 * @readonly
			 */
			public static readonly FILL: Adobe.Indesign.StrokeFillProxyOptions;
			/**
			 * Alias for STROKE. Stroke proxy is active.
			 * @type {Adobe.Indesign.StrokeFillProxyOptions}
			 * @readonly
			 */
			public static readonly stroke: Adobe.Indesign.StrokeFillProxyOptions;
			/**
			 * Stroke proxy is active.
			 * @type {Adobe.Indesign.StrokeFillProxyOptions}
			 * @readonly
			 */
			public static readonly STROKE: Adobe.Indesign.StrokeFillProxyOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
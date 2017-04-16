/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class InnerGlowSource extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The glow radiates from the object's center.
			 * @type {Adobe.Indesign.InnerGlowSource}
			 * @readonly
			 */
			public static readonly CENTER_SOURCED: Adobe.Indesign.InnerGlowSource;
			/**
			 * Alias for CENTER_SOURCED. The glow radiates from the 
			 * object's center.
			 * @type {Adobe.Indesign.InnerGlowSource}
			 * @readonly
			 */
			public static readonly centerSourced: Adobe.Indesign.InnerGlowSource;
			/**
			 * The glow radiates from the edge of the object.
			 * @type {Adobe.Indesign.InnerGlowSource}
			 * @readonly
			 */
			public static readonly EDGE_SOURCED: Adobe.Indesign.InnerGlowSource;
			/**
			 * Alias for EDGE_SOURCED. The glow radiates from the edge of 
			 * the object.
			 * @type {Adobe.Indesign.InnerGlowSource}
			 * @readonly
			 */
			public static readonly edgeSourced: Adobe.Indesign.InnerGlowSource;
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
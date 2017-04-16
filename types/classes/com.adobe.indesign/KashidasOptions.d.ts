/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class KashidasOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Default kashidas
			 * @type {Adobe.Indesign.KashidasOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_KASHIDAS: Adobe.Indesign.KashidasOptions;
			/**
			 * Alias for DEFAULT_KASHIDAS. Default kashidas
			 * @type {Adobe.Indesign.KashidasOptions}
			 * @readonly
			 */
			public static readonly defaultKashidas: Adobe.Indesign.KashidasOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Kashidas off
			 * @type {Adobe.Indesign.KashidasOptions}
			 * @readonly
			 */
			public static readonly KASHIDAS_OFF: Adobe.Indesign.KashidasOptions;
			/**
			 * Alias for KASHIDAS_OFF. Kashidas off
			 * @type {Adobe.Indesign.KashidasOptions}
			 * @readonly
			 */
			public static readonly kashidasOff: Adobe.Indesign.KashidasOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
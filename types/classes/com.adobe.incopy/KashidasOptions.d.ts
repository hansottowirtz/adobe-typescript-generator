/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class KashidasOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Default kashidas
			 * @type {Adobe.Incopy.KashidasOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_KASHIDAS: Adobe.Incopy.KashidasOptions;
			/**
			 * Alias for DEFAULT_KASHIDAS. Default kashidas
			 * @type {Adobe.Incopy.KashidasOptions}
			 * @readonly
			 */
			public static readonly defaultKashidas: Adobe.Incopy.KashidasOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Kashidas off
			 * @type {Adobe.Incopy.KashidasOptions}
			 * @readonly
			 */
			public static readonly KASHIDAS_OFF: Adobe.Incopy.KashidasOptions;
			/**
			 * Alias for KASHIDAS_OFF. Kashidas off
			 * @type {Adobe.Incopy.KashidasOptions}
			 * @readonly
			 */
			public static readonly kashidasOff: Adobe.Incopy.KashidasOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
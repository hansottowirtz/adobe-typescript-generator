/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ContainerType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALT. The container contains alternative values of 
			 * which only one can be used.
			 */
			public static readonly alt: Adobe.Indesign.ContainerType;
			/**
			 * The container contains alternative values of which only one 
			 * can be used.
			 */
			public static readonly ALT: Adobe.Indesign.ContainerType;
			/** Alias for BAG. The container contains unordered items. */
			public static readonly bag: Adobe.Indesign.ContainerType;
			/** The container contains unordered items. */
			public static readonly BAG: Adobe.Indesign.ContainerType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for SEQ. The container contains ordered or sequential 
			 * items.
			 */
			public static readonly seq: Adobe.Indesign.ContainerType;
			/** The container contains ordered or sequential items. */
			public static readonly SEQ: Adobe.Indesign.ContainerType;
			/** Constructor */
			public constructor();
		}
	}
}
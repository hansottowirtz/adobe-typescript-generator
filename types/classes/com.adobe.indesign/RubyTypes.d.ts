/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RubyTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Provides ruby for a group of characters. */
			public static readonly GROUP_RUBY: Adobe.Indesign.RubyTypes;
			/**
			 * Alias for GROUP_RUBY. Provides ruby for a group of 
			 * characters.
			 */
			public static readonly groupRuby: Adobe.Indesign.RubyTypes;
			/** Provides ruby for each individual character in the group. */
			public static readonly PER_CHARACTER_RUBY: Adobe.Indesign.RubyTypes;
			/**
			 * Alias for PER_CHARACTER_RUBY. Provides ruby for each 
			 * individual character in the group.
			 */
			public static readonly perCharacterRuby: Adobe.Indesign.RubyTypes;
			/** Constructor */
			public constructor();
		}
	}
}
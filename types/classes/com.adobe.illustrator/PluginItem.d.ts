/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Plugin artwork item */
		class PluginItem extends Adobe.Illustrator.PageItem {
			/** is the plugin group a tracing? */
			public readonly isTracing: boolean;
			/** the tracing object associated with this plugin item. */
			public readonly tracing: Adobe.Illustrator.TracingObject;
		}
	}
}
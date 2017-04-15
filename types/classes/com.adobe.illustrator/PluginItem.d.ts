/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Plugin artwork item. */
		class PluginItem extends Adobe.Illustrator.PageItem {
			/** Is the plugin group a tracing? */
			public readonly isTracing: boolean;
			/** The tracing object associated with this plugin item. */
			public readonly tracing: Adobe.Illustrator.TracingObject;
		}
	}
}
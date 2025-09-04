import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ RouterModule ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  sections = [
    "Section 1 — Binding, Diretivas, Templates, Decorators e Pipes", 
    "Section 2 — Componentes, Standalone, Input/Output, EventEmitter e Content Projection",
    "Section 3 — Serviços, Injeção de Dependência e State",
    "Section 4 — Formulários: Template-driven e Reactive",
    "Section 5 — Roteamento (Router), Lazy Loading e Guards",
    "Section 6 — HttpClient, APIs e Backend",
    "Section 7 — Signals, View Transitions, Performance e Novidades"
  ]
}

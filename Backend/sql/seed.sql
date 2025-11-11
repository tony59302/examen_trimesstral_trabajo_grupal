INSERT INTO materials (name, quantity) VALUES
('Proyector Epson', 1),
('Marcadores (x5)', 5),
('Libro: Matemáticas 3', 3)
ON CONFLICT DO NOTHING;
-- Inserta datos de prueba iniciales en la tabla 'materials' si no existen ya.
INSERT INTO loans (material_id, borrower_name, loan_date, return_date) VALUES
(1, 'Ana Gómez', NOW() - INTERVAL '10 days', NOW() - INTERVAL '2 days'),
(2, 'Luis Pérez', NOW() - INTERVAL '5 days', NULL),
(3, 'María López', NOW() - INTERVAL '3 days', NOW() - INTERVAL '1 day')
ON CONFLICT DO NOTHING;
-- Inserta datos de prueba iniciales en la tabla 'loans' si no existen ya
